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

        if (is_null($emotions)) {
            return response()->json(['message' => 'Not Found'], 404);
        }
        $separate = explode('. ', $emotions->description);

        $generate = $this->organizeValues($separate[0]);

        $comunication = $this->organizeValues($separate[1]);

        $emotion = [
            'id' => $emotions->id,
            'name' => $emotions->name,
            'generate' => [
                'title' => $generate[0],
                'description' => $generate[1]
            ],
            'comunication' => [
                'title' => $comunication[0],
                'description' => $comunication[1]
            ]
        ];
        return response()->json($emotion, 200);
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

    private function organizeValues($array)
    {
        $separate = explode('? ', $array);

        $title = $this->addCharacter($separate[0], '?');
        $description = $this->addCharacter($separate[1], '.');
        $res = [$title, $description];

        return $res;
    }
}
