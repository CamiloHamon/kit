<?php

namespace App\Http\Controllers;

use App\Models\Emotions;
use Illuminate\Http\Request;

class EmotionsCtrl extends Controller
{
    public function getEmotions() {
        $emotions = new Emotions();
        $listEmotions = $emotions->getEmotions();
        if(count($listEmotions) > 0){
            //If you find the emotions then you send them to the view as json.
            return response()->json($listEmotions, 200);
        }
 
        return response()->json(['message' => 'Not Found'], 404);
    }
}
