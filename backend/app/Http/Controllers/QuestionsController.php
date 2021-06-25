<?php

namespace App\Http\Controllers;

use App\Http\Repositories\QuestionsRepository;
use App\Models\Questions;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    private $questionsRepository;

    public function __construct(QuestionsRepository $questionsRepository)
    {
        $this->questionsRepository = $questionsRepository;
    }

    public function index()
    {
        $questions = Questions::all();
        return response()->json($questions, 200);
    }

    public function show($id)
    {
        $infoQuestion = Questions::find($id);

        $description = explode(' - ', $infoQuestion->description);
        $question = [
            'id' => $infoQuestion->id,
            'name' => $infoQuestion->name,
            'information' => [
                'title' => $description[0],
                'description' => $description[1]
            ]
        ];
        
        return response()->json($question, 200);
    }

    public function getQuestionsByESSE($idESSE)
    {
        $questions = $this->questionsRepository->getQuestionsByESSE($idESSE);
        return response()->json($questions, 200);
    }

    public function validateQuestion($idESSE, $idQuestion)
    {
        $isCorrectQuestion = $this->questionsRepository->validateQuestion($idESSE, $idQuestion);
        return response()->json($isCorrectQuestion, 200);
    }
}
