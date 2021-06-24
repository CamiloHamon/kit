<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class ESSensationsEmotionsRepository
{
    public static function getIdESSensationsEmotions($esId, $sensationId, $emotionId)
    {
        $esSensationEmotion = DB::table(('esseem_es_se_em'))
            ->select('id')
            ->where('es_id', $esId)
            ->where('se_sensation_id', $sensationId)
            ->where('em_emotion_id', $emotionId)
            ->get();

        return $esSensationEmotion;
    }

    public static function getIdEmotions($esId, $sensationId)
    {
        $sensations = DB::table(('esseem_es_se_em'))
            ->select('em_emotion_id')
            ->where('es_id', $esId)
            ->where('se_sensation_id', $sensationId)
            ->inRandomOrder()
            ->get();

        return $sensations;
    }
}
