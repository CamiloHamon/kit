<?php

namespace App\Http\Controllers;

use App\Http\Repositories\EffectiveCombinationsRepository;
use App\Http\Repositories\EnvironmentsSituationsRepository;
use App\Http\Repositories\ESSEEMQDistinctionsRepository;
use App\Http\Repositories\ESSEEMQDResourcesRepository;
use App\Http\Repositories\ESSEEMQuestionsRepository;
use App\Http\Repositories\ESSensationsEmotionsRepository;
use App\Models\Distinctions;
use App\Models\Questions;
use App\Models\Resources;
use Exception;
use Illuminate\Http\Request;

class EffectiveCombinationsCtrl extends Controller
{
    private $effectiveCombinationRepository;

    public function __construct(EffectiveCombinationsRepository $effectiveCombinationRepository)
    {
        $this->effectiveCombinationRepository = $effectiveCombinationRepository;
    }

    public function buildCombinationByEmotionID($idEmotion)
    {
        try {
            $effectiveCombination = $this->effectiveCombinationRepository->getEffectiveCombination($idEmotion);
            if (count($effectiveCombination) <= 0) {
                return response()->json(['message' => 'Not Found'], 400);
            }
            return response()->json($effectiveCombination, 200);
        } catch (Exception $e) {
            echo $e;
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
