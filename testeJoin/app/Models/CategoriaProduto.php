<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriaProduto extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome_categoria',
        // include other fields that should be mass-assignable
    ];

    public $timestamps = false;

    // Rest of the model...

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
