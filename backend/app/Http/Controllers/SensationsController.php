<?php

namespace App\Http\Controllers;

use App\Models\Sensations;
use Exception;
use Illuminate\Http\Request;

class SensationsController extends Controller
{
    public function index()
    {
        $sensations = Sensations::all();
        return response()->json($sensations, 200);
    }

    public function show($id)
    {
        $sensation = Sensations::find($id);
        return response()->json($sensation, 200);
    }
}
