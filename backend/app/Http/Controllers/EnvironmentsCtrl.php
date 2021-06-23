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
            $environments = new Environments();
            $listEnvmnts = $environments->getEnvironments();
            if (count($listEnvmnts) > 0) {
                //If you find the environments then you send them to the view as json.
                return response()->json($listEnvmnts, 200);
            }

            return response()->json(['message' => 'Not Found'], 404);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
