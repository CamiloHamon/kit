<?php

namespace App\Http\Controllers;

use App\Http\Repositories\EnvironmentsSituationsRepository;
use App\Http\Repositories\SituationsRepository;
use App\Models\Situations;
use Exception;
use Illuminate\Http\Request;

class SituationsCtrl extends Controller
{
    private $environmentSituationRepository;
    private $situationsRepository;

    public function __construct(EnvironmentsSituationsRepository $environmentSituationRepository, SituationsRepository $situationsRepository)
    {
        $this->environmentSituationRepository = $environmentSituationRepository;
        $this->situationsRepository = $situationsRepository;
    }

    public function showSituations($idEnvironment)
    {
        try {
            $situations = $this->environmentSituationRepository->getIdByEnvironmentId($idEnvironment);
            $sendSituations = array();
            foreach ($situations as $situation) {
                $newSituation = Situations::find($situation->s_situation_id);
                array_push($sendSituations, $newSituation);
            }
            return response()->json($sendSituations, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
