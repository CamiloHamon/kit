<?php

namespace App\Http\Controllers;

use App\Models\Emotions;
use Exception;
use Illuminate\Http\Request;
use App\Http\Repositories\EmotionsRepository;
use App\Http\Repositories\EnvironmentsSituationsRepository;
use App\Http\Repositories\ESSensationsEmotionsRepository;
use Illuminate\Support\Str;

use function PHPSTORM_META\type;

class EmotionsCtrl extends Controller
{

    private $emotionRepository;
    private $environmentSituationRepository;
    private $esSensationsEmotionsRepository;

    public function __construct(EmotionsRepository $emotionRepository, EnvironmentsSituationsRepository $environmentSituationRepository, ESSensationsEmotionsRepository $esSensationsEmotionsRepository)
    {
        $this->emotionRepository = $emotionRepository;
        $this->environmentSituationRepository = $environmentSituationRepository;
        $this->esSensationsEmotionsRepository = $esSensationsEmotionsRepository;
    }

    public function showEmotions($idEnv, $idSit, $idSensation)
    {
        try {
            $idEnvSit = $this->environmentSituationRepository->getIdEnvironmentAndSituation($idEnv, $idSit);
            $emotions = $this->esSensationsEmotionsRepository->getIdEmotions($idEnvSit[0]->id, $idSensation);
            $sendEmotions = array();
            foreach ($emotions as $emotion) {
                $newEmotion = Emotions::find($emotion->em_emotion_id);
                array_push($sendEmotions, $newEmotion);
            }
            
            return response()->json($sendEmotions, 200);
        } catch (Exception $e) {
            echo $e;
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
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
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
