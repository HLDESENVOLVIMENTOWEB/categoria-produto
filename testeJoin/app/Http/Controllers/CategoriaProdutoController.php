<?php

namespace App\Http\Controllers;

use App\Services\CategoriaProdutoService;
use Illuminate\Http\Request;

class CategoriaProdutoController extends Controller
{
    protected $categoriaProdutoService;

    public function __construct(CategoriaProdutoService $categoriaProdutoService)
    {
        $this->categoriaProdutoService = $categoriaProdutoService;
    }

    public function index()
    {
        $categorias = $this->categoriaProdutoService->getAll();
        return response()->json($categorias); // For API response
        // return view('categoria_produto.index', compact('categorias')); // For web response
    }

    public function show($id)
    {
        $categoria = $this->categoriaProdutoService->findById($id);

        if (!$categoria) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json($categoria);
        // return view('categoria_produto.show', compact('categoria')); // For web response
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nome_categoria' => 'required|max:150',
            // Other validation rules
        ]);

        $categoria = $this->categoriaProdutoService->create($validatedData);
        return response()->json($categoria, 201); // 201 Created
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nome_categoria' => 'required|max:150',
        ]);

        $categoria = $this->categoriaProdutoService->update($id, $validatedData);

        if (!$categoria) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json($categoria); // 200 OK
    }

    public function destroy($id)
    {
        $success = $this->categoriaProdutoService->delete($id);

        if (!$success) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json(['message' => 'Category deleted']); // 200 OK
    }
}
