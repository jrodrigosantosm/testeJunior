<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $table = 'produtos';

    public $timestamps = false;

    protected $fillable = ['nome', 'descricao', 'preco', 'quantidade'];

    public static function createCliente(array $data)
    {
        return self::create($data);
    }
}
