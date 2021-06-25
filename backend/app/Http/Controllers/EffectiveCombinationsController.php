<?php

namespace App\Http\Controllers;

use App\Http\Repositories\EffectiveCombinationsRepository;
use Illuminate\Http\Request;

class EffectiveCombinationsController extends Controller
{
    private $effectiveCombinationsRepository;

    public function __construct(EffectiveCombinationsRepository $effectiveCombinationsRepository)
    {
        $this->effectiveCombinationsRepository = $effectiveCombinationsRepository;
    }

    public function buildCombinationByEmotionId($idEmotion)
    {
        $effectiveCombination = $this->effectiveCombinationsRepository->getEffectiveCombination($idEmotion);
        return response()->json($effectiveCombination, 200);
    }
}
