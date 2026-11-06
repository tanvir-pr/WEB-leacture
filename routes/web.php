<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DatabaseController;
use App\Http\Controllers\GraphController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PizzaCrudController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::get('/database', [DatabaseController::class, 'index'])->name('database');

Route::get('/contact', [ContactController::class, 'create'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/graph', [GraphController::class, 'index'])->name('graph');

Route::middleware(['auth'])->group(function () {
    Route::get('/messages', [MessageController::class, 'index'])->name('messages');
});

Route::middleware(['auth', 'role:admin'])->prefix('crud')->name('crud.')->group(function () {
    Route::get('/', [PizzaCrudController::class, 'index'])->name('index');
    Route::post('/', [PizzaCrudController::class, 'store'])->name('store');
    Route::put('/{pizza}', [PizzaCrudController::class, 'update'])->name('update');
    Route::delete('/{pizza}', [PizzaCrudController::class, 'destroy'])->name('destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
