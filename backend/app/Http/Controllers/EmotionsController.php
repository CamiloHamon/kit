<?php

namespace App\Http\Controllers;

use App\Models\Emotions;
use Illuminate\Http\Request;
use App\Http\Repositories\EmotionsRepository;
use Illuminate\Support\Str;

class EmotionsController extends Controller
{
    private $emotionsRepository;

    public function __construct(EmotionsRepository $emotionsRepository)
    {
        $this->emotionsRepository = $emotionsRepository;
    }

    public function index()
    {
        $emotions = Emotions::all();
        return response()->json($emotions, 200);
    }

    public function show($id)
    {
        $emotions = Emotions::find($id);       
        return response()->json($emotions, 200);
    }

    public function getEmotionsByESAndSensation($idES, $idSensation)
    {
        $emotions = $this->emotionsRepository->getEmotionsByESAndSensation($idES, $idSensation);
        return response()->json($emotions, 200);
    }

    private function addCharacter($text, $character)
    {
        return Str::finish($text, $character);
    }
}
