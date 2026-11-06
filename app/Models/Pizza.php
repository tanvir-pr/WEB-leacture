<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pizza extends Model
{
    protected $fillable = ['pname', 'categoryname', 'vegetarian'];

    protected function casts(): array
    {
        return [
            'vegetarian' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'categoryname', 'cname');
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'pizzaname', 'pname');
    }
}
