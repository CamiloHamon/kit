<?php

namespace App\Http\Controllers;

use App\Models\Situations;
use Exception;
use Illuminate\Http\Request;

class SituationsCtrl extends Controller
{
    public function getSituations()
    {
        try {
            $situations = new Situations();
            $listSituations = $situations->getThreeSituations();
            if (count($listSituations) > 0) {
                //If you find the situations then you send them to the view as json.
                return response()->json($listSituations, 200);
            }

            return response()->json(['message' => 'Not Found'], 404);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
