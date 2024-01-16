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
        $produto->nome_produto = $data['nome_produto'];
        $produto->valor_produto = $data['valor_produto'];
        $produto->id_categoria_produto = $data['id_categoria_produto'];
        $produto->data_cadastro = $data['data_cadastro'];
        return $produto->save();

    }

    public function delete($id): bool
    {
        $produto = Produto::find($id);

        return $produto->delete();


    }
}
