<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('pizzaname');
            $table->unsignedInteger('amount');
            $table->dateTime('taken');
            $table->dateTime('dispatched')->nullable();
            $table->timestamps();

            $table->index('pizzaname');
            $table->index('taken');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
