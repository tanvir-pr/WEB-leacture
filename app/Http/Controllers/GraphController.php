<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Pizza;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class GraphController extends Controller
{
    public function index(): Response
    {
        $byCategory = Pizza::query()
            ->select('categoryname', DB::raw('COUNT(*) as total'))
            ->groupBy('categoryname')
            ->orderBy('categoryname')
            ->get()
            ->map(fn ($row) => [
                'label' => $row->categoryname,
                'value' => (int) $row->total,
            ]);

        $ordersByPizza = Order::query()
            ->select('pizzaname', DB::raw('SUM(amount) as total'))
            ->groupBy('pizzaname')
            ->orderByDesc('total')
            ->limit(10)
            ->get()
            ->map(fn ($row) => [
                'label' => $row->pizzaname,
                'value' => (int) $row->total,
            ]);

        return Inertia::render('graph', [
            'byCategory' => $byCategory,
            'ordersByPizza' => $ordersByPizza,
        ]);
    }
}
