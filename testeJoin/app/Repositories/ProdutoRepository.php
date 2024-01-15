<?php

// app/Repositories/ProdutoRepository.php

namespace App\Repositories;

use App\Models\Produto;
use App\Repositories\Contracts\ProdutoRepositoryInterface;
use Illuminate\Support\Collection;

class ProdutoRepository implements ProdutoRepositoryInterface
{
    public function getAll(): Collection
    {
        return Produto::all();
    }

    public function findById($id): ?Produto
    {
        return Produto::find($id);
    }

    public function create(array $data): Produto
    {
        return Produto::create($data);
    }

    public function update(Produto $produto, array $data): Produto
    {
        $produto->update($data);
        return $produto;
    }

    public function delete(Produto $produto): bool
    {
        return $produto->delete();
    }
}
