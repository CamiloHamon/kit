<?php

namespace App\Http\Controllers;

use App\Models\Environments;
use Exception;
use Illuminate\Http\Request;

class EnvironmentsCtrl extends Controller
{
    public function getEnvironments()
    {
        try {
            $listEnvmnts = Environments::all();
            if (is_null($listEnvmnts)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($listEnvmnts, 200);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
