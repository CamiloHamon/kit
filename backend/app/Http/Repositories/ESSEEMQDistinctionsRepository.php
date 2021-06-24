<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class ESSEEMQDistinctionsRepository
{

    public static function getIdESSEEMQD($esseemqId, $distinctionId)
    {
        $idESSEEMQD = DB::table(('esseemqd_esseemq_d'))
            ->select('id')
            ->where('esseemq_id', $esseemqId)
            ->where('d_distinction_id', $distinctionId)
            ->get();

        return $idESSEEMQD;
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
