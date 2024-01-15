<?php

// app/Repositories/Contracts/ProdutoRepositoryInterface.php

namespace App\Repositories\Contracts;

use App\Models\Produto;
use Illuminate\Support\Collection;

interface ProdutoRepositoryInterface
{
    public function getAll(): Collection;
    public function findById($id): ?Produto;
    public function create(array $data): Produto;
    public function update(Produto $produto, array $data): Produto;
    public function delete(Produto $produto): bool;
}
