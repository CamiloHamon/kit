<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class ESSEEMQDistinctionsRepository
{
    public static function getIdESSEEMQDistintions($esseemId, $questionID)
    {
        $esSensationEmotion = DB::table(('esseemq_esseem_q'))
            ->select('id')
            ->where('esseem_id', $esseemId)
            ->where('q_question_id', $questionID)
            ->get();

        return $esSensationEmotion;
    }

    public static function getDistinctions($esseemqId)
    {
        $distinctions = DB::table(('esseemqd_esseemq_d'))
            ->select('d_distinction_id', 'isCorrect')
            ->where('esseemq_id', $esseemqId)
            ->inRandomOrder()
            ->get();

        return $distinctions;
    }

    public static function getIsCorrectDistinction($esseemqId, $distinctionId)
    {
        $isCorrect = DB::table(('esseemqd_esseemq_d'))
            ->select('isCorrect')
            ->where('esseemq_id', $esseemqId)
            ->where('d_distinction_id', $distinctionId)
            ->get();

        return $isCorrect;
    }
}
