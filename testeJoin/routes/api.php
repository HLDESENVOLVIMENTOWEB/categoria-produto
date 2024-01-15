<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoriaProdutoController;
use App\Http\Controllers\ProdutoController;

// CategoriaProduto Routes
Route::get('/categoria-produtos', [CategoriaProdutoController::class, 'index']);
Route::get('/categoria-produtos/{id}', [CategoriaProdutoController::class, 'show']);
Route::post('/categoria-produtos', [CategoriaProdutoController::class, 'store']);
Route::put('/categoria-produtos/{id}', [CategoriaProdutoController::class, 'update']);
Route::delete('/categoria-produtos/{id}', [CategoriaProdutoController::class, 'destroy']);

// Produto Routes
Route::get('/produtos', [ProdutoController::class, 'index']);
Route::get('/produtos/{id}', [ProdutoController::class, 'show']);
Route::post('/produtos', [ProdutoController::class, 'store']);
Route::put('/produtos/{id}', [ProdutoController::class, 'update']);
Route::delete('/produtos/{id}', [ProdutoController::class, 'destroy']);
