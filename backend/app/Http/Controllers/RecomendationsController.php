<?php

namespace App\Http\Controllers;

use App\Http\Repositories\RecomendationsRepository;
use Illuminate\Http\Request;
use App\Models\ConectorsModel;
use App\Models\TypeCards;


class RecomendationsController extends Controller
{

    private $recomendatiosRepository;

    public function __construct(RecomendationsRepository $recomendatiosRepository)
    {
        $this->recomendatiosRepository = $recomendatiosRepository;
    }

    public function getRecomendations()
    {
        $recomendatios = array();
        $types_cards = TypeCards::all();
        foreach ($types_cards as $type) {
            $connector = $this->recomendatiosRepository->getRecomendations($type->id);
            array_push($recomendatios, $connector[0]);
        }
        return response()->json($recomendatios, 200);
    }
}
