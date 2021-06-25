<?php

namespace App\Http\Controllers;

use App\Models\Environments;
use Exception;
use Illuminate\Http\Request;

class EnvironmentsController extends Controller
{
    public function show($id)
    {
        $environment = Environments::find($id);
        return $environment;
    }

    public function index()
    {
        $environments = Environments::all();
        return response()->json($environments, 200);
    }
}
