<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = ['cname', 'price'];

    public function pizzas(): HasMany
    {
        return $this->hasMany(Pizza::class, 'categoryname', 'cname');
    }
}
