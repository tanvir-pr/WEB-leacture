<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Order;
use App\Models\Pizza;
use Inertia\Inertia;
use Inertia\Response;

class DatabaseController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('database', [
            'categories' => Category::query()->orderBy('cname')->get(['id', 'cname', 'price']),
            'pizzas' => Pizza::query()->orderBy('pname')->get(['id', 'pname', 'categoryname', 'vegetarian']),
            'orders' => Order::query()
                ->orderByDesc('taken')
                ->limit(50)
                ->get(['id', 'pizzaname', 'amount', 'taken', 'dispatched'])
                ->map(fn (Order $order) => [
                    'id' => $order->id,
                    'pizzaname' => $order->pizzaname,
                    'amount' => $order->amount,
                    'taken' => $order->taken?->format('Y-m-d H:i:s'),
                    'dispatched' => $order->dispatched?->format('Y-m-d H:i:s'),
                ]),
        ]);
    }
}
