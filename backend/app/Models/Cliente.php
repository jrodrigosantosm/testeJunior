<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    public $timestamps = false;

    protected $fillable = ['nome', 'email', 'telefone', 'endereco'];

    public static function createCliente(array $data)
    {
        return self::create($data);
    }
}
