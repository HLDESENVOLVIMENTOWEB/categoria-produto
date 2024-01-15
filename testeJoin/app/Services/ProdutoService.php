<?php

namespace App\Services;

use App\Models\Produto; // Import your model
use Illuminate\Support\Collection;

use App\Repositories\Contracts\ProdutoRepositoryInterface;


class ProdutoService
{

    protected $produtoRepository;

    public function __construct(ProdutoRepositoryInterface $produtoRepository)
    {
        $this->produtoRepository = $produtoRepository;
    }

    public function getAll(): Collection
    {
        return $this->produtoRepository->getAll();
    }

    public function findById($id): ?Produto
    {
        return $this->produtoRepository->findById($id);
    }

    public function create(array $data): Produto
    {
        // Perform any business logic or data manipulation here
        return $this->produtoRepository->create($data);
    }

    public function update(array $data): Produto
    {
        // Perform any business logic or data manipulation here
        $this->produtoRepository->update($data);
        return $produto;
    }

    public function delete(): bool
    {
        return $this->produtoRepository->delete();
    }
}
