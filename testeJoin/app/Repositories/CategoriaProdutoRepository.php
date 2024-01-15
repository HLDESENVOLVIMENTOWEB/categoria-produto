<?php

// app/Repositories/CategoriaProdutoRepository.php

namespace App\Repositories;

use App\Models\CategoriaProduto;
use App\Repositories\Contracts\CategoriaProdutoRepositoryInterface;
use Illuminate\Support\Collection;

class CategoriaProdutoRepository implements CategoriaProdutoRepositoryInterface
{
    public function getAll(): Collection
    {
        return CategoriaProduto::all();
    }

    public function findById($id): ?CategoriaProduto
    {
        return CategoriaProduto::with('produtos')->where('id_categoria_planejameto', $id)->first();
    }

    public function create(array $data): CategoriaProduto
    {
        return CategoriaProduto::create($data);
    }

    public function update($id, array $data): CategoriaProduto
    {
        $categoriaProduto = CategoriaProduto::where('id_categoria_planejameto', $id)->first();
        $categoriaProduto->nome_categoria = 'New Name';
        return $categoriaProduto->save();

    }

    public function delete($id): bool
    {

        $categoriaProduto = CategoriaProduto::where('id_categoria_planejameto', $id)->first();

        return $categoriaProduto->delete();
    }
}
