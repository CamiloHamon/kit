<?php

namespace App\Http\Controllers;

use App\Models\Emotions;
use Exception;
use Illuminate\Http\Request;

class EmotionsCtrl extends Controller
{
    public function getEmotions()
    {
        try {
            $emotions = new Emotions();
            $listEmotions = $emotions->getFourEmotions();
            if (count($listEmotions) > 0) {
                //If you find the emotions then you send them to the view as json.
                return response()->json($listEmotions, 200);
            }

            return response()->json(['message' => 'Not Found'], 404);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
