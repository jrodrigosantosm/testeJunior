<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $table = 'pedidos_compra';

    public $timestamps = false;

    protected $fillable = ['cliente', 'valor_total', 'status'];

    public static function createPedido(array $data)
    {

        return self::create($data);
    }
}
