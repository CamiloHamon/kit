<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class EffectiveCombinationsRepository
{

    public static function getEffectiveCombination($emotionId)
    {
        $effectiveCombintation = DB::table(('esseem_es_se_em as esEM'))
            ->select('em.name as emotion', 'em.id as id_emotion', 'em.description as emotion_description', 'em.default_text as emotion_default_text', 'q.name as question', 'q.id as id_question', 'q.description as question_description', 'q.default_text as question_default_text', 'd.name as distinction',  'd.id as id_distinction',  'd.description as distinction_description', 'd.default_text as distinction_default_text', 'r.name as resource', 'r.id as id_resource', 'r.description as resource_description', 'r.default_text as resource_default_text')
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
