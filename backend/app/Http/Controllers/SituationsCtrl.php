<?php

namespace App\Http\Controllers;

use App\Http\Repositories\SituationsRepository;
use App\Models\Situations;
use Exception;
use Illuminate\Http\Request;

class SituationsCtrl extends Controller
{
    private $situationsRepository;

    public function __construct(SituationsRepository $situationsRepository)
    {
        $this->situationsRepository = $situationsRepository;
    }

    public function getSituations()
    {
        try {
            $listSituations = $this->situationsRepository->getThreeSituations();
            if (is_null($listSituations)) {
                return response()->json(['message' => 'Not Found'], 404);
            }
            return response()->json($listSituations, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
