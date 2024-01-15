<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_produto',
        'valor_produto',
        'id_categoria_produto',
        'data_cadastro',
        'categoria_produtos'
    ];

    public $timestamps = false;


    public function categoriaProduto()
    {
        return $this->belongsTo(CategoriaProduto::class, 'id_categoria_produto', 'id_categoria_planejameto');
    }
}
