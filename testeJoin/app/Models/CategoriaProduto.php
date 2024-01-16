<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CategoriaProduto extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

     protected $primaryKey = 'id_categoria_planejameto';

    protected $fillable = [
        'id_categoria_planejameto',
        'nome_categoria'
        // include other fields that should be mass-assignable
    ];

    public $timestamps = false;

    // Rest of the model...


    public function produtos()
    {
        return $this->hasMany(Produto::class, 'id_categoria_produto', 'id_categoria_planejameto');
    }
}
