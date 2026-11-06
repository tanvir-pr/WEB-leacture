<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Order;
use App\Models\Pizza;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class PizzaSeeder extends Seeder
{
    public function run(): void
    {
        $base = $_ENV['PIZZA_DATA_PATH']
            ?? (getenv('PIZZA_DATA_PATH') ?: null)
            ?? (is_dir(base_path('database/data/pizza'))
                ? base_path('database/data/pizza')
                : (getenv('USERPROFILE')
                    ? getenv('USERPROFILE').DIRECTORY_SEPARATOR.'Downloads'.DIRECTORY_SEPARATOR.'Databases for Homeworks'.DIRECTORY_SEPARATOR.'02-Pizza'
                    : null));

        if (! $base || ! is_dir($base)) {
            $this->command?->warn('Pizza data folder not found. Seeding sample rows only.');
            $this->seedSample();

            return;
        }

        $this->seedCategories($base.DIRECTORY_SEPARATOR.'category.txt');
        $this->seedPizzas($base.DIRECTORY_SEPARATOR.'pizza.txt');
        $this->seedOrders($base.DIRECTORY_SEPARATOR.'order.txt');
    }

    private function seedSample(): void
    {
        Category::query()->insert([
            ['cname' => 'page', 'price' => 850, 'created_at' => now(), 'updated_at' => now()],
            ['cname' => 'king', 'price' => 1250, 'created_at' => now(), 'updated_at' => now()],
            ['cname' => 'knight', 'price' => 1150, 'created_at' => now(), 'updated_at' => now()],
        ]);

        Pizza::query()->insert([
            ['pname' => 'Margherita', 'categoryname' => 'page', 'vegetarian' => true, 'created_at' => now(), 'updated_at' => now()],
            ['pname' => 'Barbecue chicken', 'categoryname' => 'knight', 'vegetarian' => false, 'created_at' => now(), 'updated_at' => now()],
            ['pname' => 'Country', 'categoryname' => 'king', 'vegetarian' => false, 'created_at' => now(), 'updated_at' => now()],
        ]);

        Order::query()->insert([
            [
                'pizzaname' => 'Barbecue chicken',
                'amount' => 1,
                'taken' => '2005-11-12 12:38:00',
                'dispatched' => '2005-11-12 13:02:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    private function seedCategories(string $path): void
    {
        $rows = $this->readTsv($path);
        $payload = [];
        foreach ($rows as $row) {
            if (count($row) < 2) {
                continue;
            }
            $payload[] = [
                'cname' => $row[0],
                'price' => (int) $row[1],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        foreach (array_chunk($payload, 100) as $chunk) {
            Category::query()->insert($chunk);
        }
    }

    private function seedPizzas(string $path): void
    {
        $rows = $this->readTsv($path);
        $payload = [];
        foreach ($rows as $row) {
            if (count($row) < 3) {
                continue;
            }
            $payload[] = [
                'pname' => $row[0],
                'categoryname' => $row[1],
                'vegetarian' => ((int) $row[2]) === 1,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        foreach (array_chunk($payload, 100) as $chunk) {
            Pizza::query()->insert($chunk);
        }
    }

    private function seedOrders(string $path): void
    {
        $rows = $this->readTsv($path);
        $payload = [];
        foreach ($rows as $row) {
            if (count($row) < 4) {
                continue;
            }
            $payload[] = [
                'pizzaname' => $row[0],
                'amount' => (int) $row[1],
                'taken' => $this->parseDate($row[2]),
                'dispatched' => $this->parseDate($row[3]),
                'created_at' => now(),
                'updated_at' => now(),
            ];

            if (count($payload) >= 500) {
                Order::query()->insert($payload);
                $payload = [];
            }
        }
        if ($payload !== []) {
            Order::query()->insert($payload);
        }
    }

    /**
     * @return list<list<string>>
     */
    private function readTsv(string $path): array
    {
        if (! is_file($path)) {
            return [];
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES);
        if ($lines === false || count($lines) < 2) {
            return [];
        }

        array_shift($lines); // header
        $out = [];
        foreach ($lines as $line) {
            if (trim($line) === '') {
                continue;
            }
            $out[] = explode("\t", $line);
        }

        return $out;
    }

    private function parseDate(string $value): ?string
    {
        $value = trim($value);
        if ($value === '' || strcasecmp($value, 'NULL') === 0) {
            return null;
        }

        // Source format: 2005.11.12 11:21:00
        $normalized = str_replace('.', '-', $value);

        try {
            return Carbon::parse($normalized)->format('Y-m-d H:i:s');
        } catch (\Throwable) {
            return null;
        }
    }
}
