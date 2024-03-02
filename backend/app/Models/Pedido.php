<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    public $timestamps = false;

    protected $fillable = ['cliente', 'valor_total', 'status'];

    public static function createCliente(array $data)
    {
        return self::create($data);
    }
}
