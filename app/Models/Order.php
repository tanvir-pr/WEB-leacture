<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    protected $fillable = ['pizzaname', 'amount', 'taken', 'dispatched'];

    protected function casts(): array
    {
        return [
            'taken' => 'datetime',
            'dispatched' => 'datetime',
        ];
    }

    public function pizza(): BelongsTo
    {
        return $this->belongsTo(Pizza::class, 'pizzaname', 'pname');
    }
}
