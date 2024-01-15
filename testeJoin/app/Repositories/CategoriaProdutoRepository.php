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
        return CategoriaProduto::find($id);
    }

    public function create(array $data): CategoriaProduto
    {
        return CategoriaProduto::create($data);
    }

    public function update(CategoriaProduto $categoriaProduto, array $data): CategoriaProduto
    {
        $categoriaProduto->update($data);
        return $categoriaProduto;
    }

    public function delete(CategoriaProduto $categoriaProduto): bool
    {
        return $categoriaProduto->delete();
    }
}
