<?php

use App\Http\Controllers\DatabaseController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::get('/database', [DatabaseController::class, 'index'])->name('database');
Route::inertia('/contact', 'contact')->name('contact');
Route::inertia('/graph', 'graph')->name('graph');

Route::middleware(['auth'])->group(function () {
    Route::inertia('/messages', 'messages')->name('messages');
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::inertia('/crud', 'crud')->name('crud');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
