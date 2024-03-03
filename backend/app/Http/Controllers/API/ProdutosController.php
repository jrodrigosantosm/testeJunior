<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutosController extends Controller
{
    public function index()
    {
        return Produto::all();
    }

    public function store(Request $request)
    {
        $cliente = Produto::createProduto($request->all());
        return response()->json($cliente, 201);
    }

    public function show($id)
    {
        return Produto::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $cliente = Produto::findOrFail($id);
        $cliente->update($request->all());
        return $cliente;
    }

    public function destroy($id)
    {
        $cliente = Produto::findOrFail($id);
        $cliente->delete();
        return response()->json(['message' => 'Produto removido com sucesso']);
    }
}
