<?php

// app/Repositories/CategoriaProdutoRepository.php

namespace App\Repositories;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;

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
        $categoria = CategoriaProduto::find($id);

        if (!$categoria) {
            throw new ModelNotFoundException('Produto not found.');
        }

        $categoria->update($data);

        return $categoria;
    }

    public function delete($id): bool
    {

        $categoriaProduto = CategoriaProduto::find($id); // Now $id refers to 'id_categoria_planejamento'

        if (count($categoriaProduto->produtos) > 0) {
            Log::info("Attempt to delete CategoriaProduto with linked products", ['id' => $id]);
            throw new Exception('Existem produtos linkados a esta categoria.');
        }

        if ($categoriaProduto) {
          return  $categoriaProduto->delete();
            // Optionally handle related data here, if necessary
        } else {
            throw new ModelNotFoundException('Produto not found.');
        }
    }
}
