<?php

namespace App\Http\Controllers;

use App\Services\ProdutoService;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    protected $produtoService;

    public function __construct(ProdutoService $produtoService)
    {
        $this->produtoService = $produtoService;
    }

    public function index()
    {
        $produtos = $this->produtoService->getAll();
        return response()->json($produtos); // For API response
        // return view('produto.index', compact('produtos')); // For web response
    }

    public function show($id)
    {
        $produto = $this->produtoService->findById($id);

        if (!$produto) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($produto);
        // return view('produto.show', compact('produto')); // For web response
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nome_produto' => 'required|max:150',
            'valor_produto' => 'required|numeric',
            'id_categoria_produto' => 'required',
        ]);

        $validatedData['data_cadastro'] = new \DateTime();

        $produto = $this->produtoService->create($validatedData);
        return response()->json($produto, 201); // 201 Created
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nome_produto' => 'required|max:150',
            'valor_produto' => 'required|numeric',
            'id_categoria_produto' => 'required',
        ]);

        $validatedData['data_cadastro'] = new \DateTime();


        $produto = $this->produtoService->update($validatedData, $id);

        if (!$produto) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($produto); // 200 OK
    }

    public function destroy($id)
    {
        $success = $this->produtoService->delete($id);

        if (!$success) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json(['message' => 'Product deleted']); // 200 OK
    }
}
