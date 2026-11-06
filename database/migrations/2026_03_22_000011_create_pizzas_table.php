<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pizzas', function (Blueprint $table) {
            $table->id();
            $table->string('pname')->unique();
            $table->string('categoryname');
            $table->boolean('vegetarian')->default(false);
            $table->timestamps();

            $table->foreign('categoryname')->references('cname')->on('categories');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pizzas');
    }
};
