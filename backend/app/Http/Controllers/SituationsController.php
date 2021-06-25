<?php

namespace App\Http\Controllers;

use App\Http\Repositories\SituationsRepository;
use App\Models\Situations;
use Illuminate\Http\Request;

class SituationsController extends Controller
{
    private $situationsRepository;

    public function __construct(SituationsRepository $situationsRepository)
    {
        $this->situationsRepository = $situationsRepository;
    }

    public function index()
    {
        $situations = Situations::all();
        return response()->json($situations, 200);
    }

    public function show($id)
    {
        $situation = Situations::find($id);
        return response()->json($situation, 200);
    }

    public function getSituationsByEnvironment($idEnvironment)
    {
        $situations = $this->situationsRepository->getSituationsByEnvironment($idEnvironment);
        return response()->json($situations, 200);
    }
}
