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
            $listEmotions = Emotions::getFourEmotions();
            if (is_null($listEmotions)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($listEmotions, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function getEmotionsById($id)
    {
        try {
            $emotions = Emotions::find($id);

            if (is_null($emotions)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($emotions, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
