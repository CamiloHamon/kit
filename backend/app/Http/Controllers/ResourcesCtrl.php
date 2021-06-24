<?php

namespace App\Http\Controllers;

use App\Http\Repositories\EnvironmentsSituationsRepository;
use App\Http\Repositories\ESSEEMQDistinctionsRepository;
use App\Http\Repositories\ESSEEMQDResourcesRepository;
use App\Http\Repositories\ESSEEMQuestionsRepository;
use App\Http\Repositories\ESSensationsEmotionsRepository;
use App\Models\Resources;
use Exception;
use Illuminate\Http\Request;

class ResourcesCtrl extends Controller
{
    private $environmentSituation;
    private $esSensationEmotion;
    private $esseemQuestion;
    private $esseemqDistinction;
    private $esseemqdResources;


    public function __construct(EnvironmentsSituationsRepository $environmentSituation, ESSensationsEmotionsRepository $esSensationEmotion, ESSEEMQuestionsRepository $esseemQuestion, ESSEEMQDistinctionsRepository $esseemqDistinction, ESSEEMQDResourcesRepository $esseemqdResources)
    {
        $this->environmentSituation = $environmentSituation;
        $this->esSensationEmotion = $esSensationEmotion;
        $this->esseemQuestion = $esseemQuestion;
        $this->esseemqDistinction = $esseemqDistinction;
        $this->esseemqdResources = $esseemqdResources;
    }

    public function getAllResources()
    {
        try {
            $resources = Resources::all();
            if (is_null($resources)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($resources, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function showResources($idEnv, $idSit, $idSensation, $idEmotion, $idQuestion, $idDistinction)
    {
        try {
            $idEnvSit = $this->environmentSituation->getIdEnvironmentAndSituation($idEnv, $idSit);
            $idEnvSitSenEmo = $this->esSensationEmotion->getIdESSensationsEmotions($idEnvSit[0]->id, $idSensation, $idEmotion);
            $idEnvSitSenEmoQues = $this->esseemQuestion->getIdESSEMQuestion($idEnvSitSenEmo[0]->id, $idQuestion);
            $idEnvSitSenEmoQuesDist = $this->esseemqDistinction->getIdESSEEMQD($idEnvSitSenEmoQues[0]->id, $idDistinction);
            $resources = $this->esseemqdResources->getResources($idEnvSitSenEmoQuesDist[0]->id);
            $sendDistinctions = array();
            foreach ($resources as $resource) {
                $newResource = Resources::find($resource->r_resource_id);
                $newResource->isCorrect = $resource->isCorrect;
                array_push($sendDistinctions, $newResource);
            }

            return response()->json($sendDistinctions, 200);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function getResourceById($id)
    {
        try {
            $infoQuestion = Resources::find($id);
            if (is_null($infoQuestion)) {
                return response()->json(['message' => 'Not Found'], 400);
            }
            $description = explode('. ', $infoQuestion->description);
            $question = [
                'id'=> $infoQuestion->id,
                'name'=>$infoQuestion->name,
                'content'=>[
                    'firstPart'=>$description[0],
                    'secondPart'=>$description[1]
                ]
            ];
            return response()->json($question, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function validateResource($idEnv, $idSit, $idSensation, $idEmotion, $idQuestion, $idDistinction, $idResource)
    {
        try {
            $idEnvSit = $this->environmentSituation->getIdEnvironmentAndSituation($idEnv, $idSit);
            $idEnvSitSenEmo = $this->esSensationEmotion->getIdESSensationsEmotions($idEnvSit[0]->id, $idSensation, $idEmotion);
            $idEnvSitSenEmoQues = $this->esseemQuestion->getIdESSEMQuestion($idEnvSitSenEmo[0]->id, $idQuestion);
            $idEnvSitSenEmoQuesDist = $this->esseemqDistinction->getIdESSEEMQD($idEnvSitSenEmoQues[0]->id, $idDistinction);
            $isCorrect = $this->esseemqdResources->getIsCorrectResource($idEnvSitSenEmoQuesDist[0]->id, $idResource);
            if (count($isCorrect) <= 0) {
                return response()->json(['message' => 'Not Found'], 400);
            }
            return response()->json($isCorrect, 200);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
