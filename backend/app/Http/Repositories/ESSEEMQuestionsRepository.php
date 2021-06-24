<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class ESSEEMQuestionsRepository
{
    public static function getIdESSEMQuestion($esseemId, $questionID)
    {
        $esSensationEmotion = DB::table(('esseemq_esseem_q'))
            ->select('id')
            ->where('esseem_id', $esseemId)
            ->where('q_question_id', $questionID)
            ->get();

        return $esSensationEmotion;
    }

    public static function getQuestions($esseemId)
    {
        $esSensationEmotion = DB::table(('esseemq_esseem_q'))
            ->select('q_question_id', 'isCorrect')
            ->where('esseem_id', $esseemId)
            ->inRandomOrder()
            ->get();

        return $esSensationEmotion;
    }

    public static function getIsCorrectQuestion($esseemId, $questionID)
    {
        $isCorrect = DB::table(('esseemq_esseem_q'))
            ->select('isCorrect')
            ->where('esseem_id', $esseemId)
            ->where('q_question_id', $questionID)
            ->get();

        return $isCorrect;
    }
}
