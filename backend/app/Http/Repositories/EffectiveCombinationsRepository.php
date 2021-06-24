<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class EffectiveCombinationsRepository
{

    public static function getEffectiveCombination($emotionId)
    {
        $effectiveCombintation = DB::table(('esseem_es_se_em as esEM'))
            ->select('em.name as emotion', 'q.name as question', 'd.name as distinction', 'r.name as resource')
            ->join('esseemq_esseem_q as esEMQ', 'esEMQ.esseem_id', '=', 'esEM.id')
            ->join('esseemqd_esseemq_d as esEMQD', 'esEMQ.id', '=', 'esEMQD.esseemq_id')
            ->join('esseemqdr_esseemqd_r as esEMDQR', 'esEMDQR.esseemqd_id', '=', 'esEMQD.id')
            ->join('em_emotions as em', 'esEM.em_emotion_id', '=', 'em.id')
            ->join('q_questions as q', 'esEMQ.q_question_id', '=', 'q.id')
            ->join('d_distinctions as d', 'esEMQD.d_distinction_id', '=', 'd.id')
            ->join('r_resources as r', 'esEMDQR.r_resource_id', '=', 'r.id')
            ->where('esEM.em_emotion_id', $emotionId)
            ->where('esEMQ.isCorrect', 1)
            ->where('esEMQD.isCorrect', 1)
            ->where('esEMDQR.isCorrect', 1)
            ->inRandomOrder()
            ->limit(2)
            ->get();

        return $effectiveCombintation;
    }
}