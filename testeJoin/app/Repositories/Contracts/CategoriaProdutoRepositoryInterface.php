<?php
// app/Repositories/Contracts/CategoriaProdutoRepositoryInterface.php

namespace App\Repositories\Contracts;

use App\Models\CategoriaProduto;
use Illuminate\Support\Collection;

interface CategoriaProdutoRepositoryInterface
{
    public function getAll(): Collection;
    public function findById($id): ?CategoriaProduto;
    public function create(array $data): CategoriaProduto;
    public function update(CategoriaProduto $categoriaProduto, array $data): CategoriaProduto;
    public function delete(CategoriaProduto $categoriaProduto): bool;
}
