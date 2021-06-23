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
            $sensations = new Sensations();
            $listSensations = $sensations->getSensations();
            if (count($listSensations) > 0) {
                //If you find the situations then you send them to the view as json.
                return response()->json($listSensations, 200);
            }

            return response()->json(['message' => 'Not Found'], 404);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
