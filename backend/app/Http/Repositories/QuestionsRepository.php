<?php

namespace App\Http\Repositories;

use App\Models\Situations;
use Illuminate\Support\Facades\DB;

class QuestionsRepository
{
    public static function getQuestionsByESSE($idESSE)
    {
        $questions = DB::table(('esseemq_esseem_q as esseq'))
            ->select('esseq.id', 'q.id as id_question', 'q.name as question')
            ->join('esseem_es_se_em as esse', 'esse.id', 'esseq.esseem_id')
            ->join('q_questions as q', 'q.id', 'esseq.q_question_id')
            ->where('esseq.esseem_id', $idESSE)
            ->inRandomOrder()
            ->get();

        return $questions;
    }

    public static function validateQuestion($idESSE, $idQuestion)
    {
        $questions = DB::table(('esseemq_esseem_q as esseq'))
            ->select('esseq.id', 'esseq.isCorrect')
            ->join('esseem_es_se_em as esse', 'esse.id', 'esseq.esseem_id')
            ->join('q_questions as q', 'q.id', 'esseq.q_question_id')
            ->where('esseq.esseem_id', $idESSE)
            ->where('esseq.q_question_id', $idQuestion)
            ->inRandomOrder()
            ->get();

        return $questions;
    }
}
