<?php

namespace App\Http\Controllers;

use App\Http\Repositories\DistinctionsRepository;
use App\Models\Distinctions;
use Illuminate\Http\Request;

class DistinctionsController extends Controller
{
    private $distinctionsRepository;
    
    public function __construct(DistinctionsRepository $distinctionsRepository)
    {
        $this->distinctionsRepository  = $distinctionsRepository;
    }

    public function index()
    {
        $distinctions = Distinctions::all();
        return response()->json($distinctions, 404);
    }

    public function show($id)
    {
        $infoQuestion = Distinctions::find($id);
        return response()->json($infoQuestion, 200);
    }

    public function getDistinctionsByESSEQ($idESSEQ)
    {
        $distinctions = $this->distinctionsRepository->getDistinctionsByESSEQ($idESSEQ);
        return response()->json($distinctions, 200);
    }

    public function validateDistinction($idESSEQ, $idDistinction)
    {
        $isCorrectDistinction = $this->distinctionsRepository->validateDistinction($idESSEQ, $idDistinction);
        return response()->json($isCorrectDistinction, 200);
    }
}
