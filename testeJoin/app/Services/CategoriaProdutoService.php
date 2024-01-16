<?php

namespace App\Services;

use App\Models\CategoriaProduto; // Make sure to import your model
use Illuminate\Support\Collection;

use App\Repositories\Contracts\CategoriaProdutoRepositoryInterface;


class CategoriaProdutoService
{
    protected $categoriaProdutoRepository;

    public function __construct(CategoriaProdutoRepositoryInterface $categoriaProdutoRepository)
    {
        $this->categoriaProdutoRepository = $categoriaProdutoRepository;
    }

    public function getAll(): Collection
    {
        return $this->categoriaProdutoRepository->getAll();
    }

    public function findById($id): ?CategoriaProduto
    {
        return $this->categoriaProdutoRepository->findById($id);
    }

    public function create(array $data): CategoriaProduto
    {
        // Perform any business logic or data manipulation here
        return $this->categoriaProdutoRepository->create($data);
    }

    public function update($id, array $data): CategoriaProduto
    {
        // Perform any business logic or data manipulation here
        return $this->categoriaProdutoRepository->update($id, $data);
    }

    public function delete($id): bool
    {
        return $this->categoriaProdutoRepository->delete($id);
    }
}
