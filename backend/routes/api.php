<?php

use App\Http\Controllers\API\ClienteController;
use Illuminate\Support\Facades\Route;

Route::get('/cliente', [ClienteController::class, 'index'])->name('index');
Route::post('/cliente', [ClienteController::class, 'store'])->name('store');
Route::delete('/cliente/delete/{id}', [ClienteController::class, 'destroy'])->name('destroy');
Route::get('/cliente/{id}', [ClienteController::class, 'show'])->name('show');
Route::put('/cliente/{id}', [ClienteController::class, 'update'])->name('update');
