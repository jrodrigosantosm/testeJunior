<?php

use App\Http\Controllers\API\ClienteController;
use App\Http\Controllers\API\PedidosController;
use Illuminate\Support\Facades\Route;

Route::get('/cliente', [ClienteController::class, 'index'])->name('index');
Route::post('/cliente', [ClienteController::class, 'store'])->name('store');
Route::delete('/cliente/delete/{id}', [ClienteController::class, 'destroy'])->name('destroy');
Route::get('/cliente/{id}', [ClienteController::class, 'show'])->name('show');
Route::put('/cliente/{id}', [ClienteController::class, 'update'])->name('update');


Route::get('/pedidos', [PedidosController::class, 'index'])->name('index');
Route::post('/pedidos', [PedidosController::class, 'store'])->name('store');
Route::delete('/pedidos/delete/{id}', [PedidosController::class, 'destroy'])->name('destroy');
Route::get('/pedidos/{id}', [PedidosController::class, 'show'])->name('show');
Route::put('/pedidos/{id}', [PedidosController::class, 'update'])->name('update');

Route::get('/produtos', [PedidosController::class, 'index'])->name('index');
Route::post('/produtos', [PedidosController::class, 'store'])->name('store');
Route::delete('/produtos/delete/{id}', [PedidosController::class, 'destroy'])->name('destroy');
Route::get('/produtos/{id}', [PedidosController::class, 'show'])->name('show');
Route::put('/produtos/{id}', [PedidosController::class, 'update'])->name('update');
