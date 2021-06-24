<?php

namespace App\Http\Controllers;

use App\Http\Repositories\EnvironmentsSituationsRepository;
use App\Http\Repositories\ESSEEMQDistinctionsRepository;
use App\Http\Repositories\ESSEEMQuestionsRepository;
use App\Http\Repositories\ESSensationsEmotionsRepository;
use App\Models\Distinctions;
use Exception;
use Illuminate\Http\Request;

class DistinctionsCtrl extends Controller
{
    private $environmentSituation;
    private $esSensationEmotion;
    private $esseemQuestion;
    private $esseemqDistinction;


    public function __construct(EnvironmentsSituationsRepository $environmentSituation, ESSensationsEmotionsRepository $esSensationEmotion, ESSEEMQuestionsRepository $esseemQuestion, ESSEEMQDistinctionsRepository $esseemqDistinction)
    {
        $this->environmentSituation = $environmentSituation;
        $this->esSensationEmotion = $esSensationEmotion;
        $this->esseemQuestion = $esseemQuestion;
        $this->esseemqDistinction = $esseemqDistinction;
    }

    public function getAllDistinctions()
    {
        try {
            $distinctions = Distinctions::all();
            if (is_null($distinctions)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($distinctions, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function showDistinctions($idEnv, $idSit, $idSensation, $idEmotion, $idQuestion)
    {
        try {
            $idEnvSit = $this->environmentSituation->getIdEnvironmentAndSituation($idEnv, $idSit);
            $idEnvSitSenEmo = $this->esSensationEmotion->getIdESSensationsEmotions($idEnvSit[0]->id, $idSensation, $idEmotion);
            $idEnvSitSenEmoQues = $this->esseemQuestion->getIdESSEMQuestion($idEnvSitSenEmo[0]->id, $idQuestion);
            $distinctions = $this->esseemqDistinction->getDistinctions($idEnvSitSenEmoQues[0]->id);
            $sendDistinctions = array();
            foreach ($distinctions as $distinction) {
                $newDistinction = Distinctions::find($distinction->d_distinction_id);
                $newDistinction->isCorrect = $distinction->isCorrect;
                array_push($sendDistinctions, $newDistinction);
            }

            return response()->json($sendDistinctions, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function getDistinctionById($id)
    {
        try {
            $infoQuestion = Distinctions::find($id);
            if (is_null($infoQuestion)) {
                return response()->json(['message' => 'Not Found'], 400);
            }
            return response()->json($infoQuestion, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function validateDistinction($idEnv, $idSit, $idSensation, $idEmotion, $idQuestion, $idDistinction)
    {
        try {
            $idEnvSit = $this->environmentSituation->getIdEnvironmentAndSituation($idEnv, $idSit);
            $idEnvSitSenEmo = $this->esSensationEmotion->getIdESSensationsEmotions($idEnvSit[0]->id, $idSensation, $idEmotion);
            $idEnvSitSenEmoQues = $this->esseemQuestion->getIdESSEMQuestion($idEnvSitSenEmo[0]->id, $idQuestion);
            $isCorrect = $this->esseemqDistinction->getIsCorrectDistinction($idEnvSitSenEmoQues[0]->id, $idDistinction);
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
