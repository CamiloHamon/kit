<?php

namespace App\Http\Controllers;

use App\Models\Sensations;
use Exception;
use Illuminate\Http\Request;

class SensationsCtrl extends Controller
{
    public function getSensations()
    {
        try {
            $listSensations = Sensations::all();
            if (is_null($listSensations)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($listSensations, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
