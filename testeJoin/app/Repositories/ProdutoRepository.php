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
        return Produto::with('categoriaProduto')->get();
    }

    public function findById($id): ?Produto
    {
        return Produto::with('categoriaProduto')->find($id);
    }

    public function create(array $data): Produto
    {
        return Produto::create($data);
    }

    public function update(array $data, $id): Produto
    {
        $produto = Produto::find($id);
        $produto->name = 'New Name';
        $produto->email = 'newemail@example.com';
        return $user->save();

    }

    public function delete($id): bool
    {
        $produto = Produto::find($id);

        return $produto->delete();


    }
}
