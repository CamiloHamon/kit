<?php

namespace App\Http\Repositories;

use App\Models\Situations;
use Illuminate\Support\Facades\DB;

class DistinctionsRepository
{
    public static function getDistinctionsByESSEQ($idESSEQ)
    {
        $distinctions = DB::table(('esseemqd_esseemq_d as esseqd'))
            ->select('esseqd.id', 'd.id as id_distinction', 'd.name as distinction')
            ->join('esseemq_esseem_q as esseq', 'esseq.id', 'esseqd.esseemq_id')
            ->join('d_distinctions as d', 'd.id', 'esseqd.d_distinction_id')
            ->where('esseqd.esseemq_id', $idESSEQ)
            ->inRandomOrder()
            ->get();

        return $distinctions;
    }

    public static function validateDistinction($idESSEQ, $idDistinction)
    {
        $isCorrectDistinction = DB::table(('esseemqd_esseemq_d as esseqd'))
            ->select('esseqd.id', 'esseqd.isCorrect')
            ->join('esseemq_esseem_q as esseq', 'esseq.id', 'esseqd.esseemq_id')
            ->join('d_distinctions as d', 'd.id', 'esseqd.d_distinction_id')
            ->where('esseqd.esseemq_id', $idESSEQ)
            ->where('esseqd.d_distinction_id', $idDistinction)
            ->inRandomOrder()
            ->get();

        return $isCorrectDistinction;
    }
}
