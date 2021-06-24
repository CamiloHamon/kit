<?php

namespace App\Http\Controllers;

use App\Http\Repositories\EnvironmentsSituationsRepository;
use App\Http\Repositories\ESSEEMQuestionsRepository;
use App\Http\Repositories\ESSensationsEmotionsRepository;
use App\Models\Questions;
use Exception;
use Illuminate\Http\Request;

class ShowQuestionsCtrl extends Controller
{
    private $environmentSituation;
    private $esSensationEmotion;
    private $esseemQuestion;

    public function __construct(EnvironmentsSituationsRepository $environmentSituation, ESSensationsEmotionsRepository $esSensationEmotion, ESSEEMQuestionsRepository $esseemQuestion)
    {
        $this->environmentSituation = $environmentSituation;
        $this->esSensationEmotion = $esSensationEmotion;
        $this->esseemQuestion = $esseemQuestion;
    }

    public function showQuestions($idEnv, $idSit, $idSensation, $idEmotion)
    {
        try {
            $idEnvSit = $this->environmentSituation->getIdEnvironmentAndSituation($idEnv, $idSit);
            $idEnvSitSenEmo = $this->esSensationEmotion->getIdESSensationsEmotions($idEnvSit[0]->id, $idSensation, $idEmotion);
            $questions = $this->esseemQuestion->getQuestions($idEnvSitSenEmo[0]->id);
            $sendQuestions = array();
            foreach ($questions as $question) {
                $newQuestion = Questions::find($question->q_question_id);
                $newQuestion->isCorrect = $question->isCorrect;
                array_push($sendQuestions, $newQuestion);
            }
            
            return response()->json($sendQuestions, 200);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
