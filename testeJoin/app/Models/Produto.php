<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_produto',
        'valor_produto',
        'id_categoria_produto',
        'data_cadastro'
    ];

    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
