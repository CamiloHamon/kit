<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class ESSensationsEmotionsRepository
{
    public static function getIdESSensationsEmotions($ESId, $sensationId, $emotionId)
    {
        $esSensationEmotion = DB::table(('esseem_es_se_em'))
            ->select('id')
            ->where('es_id', $ESId)
            ->where('se_sensation_id', $sensationId)
            ->where('em_emotion_id', $emotionId)
            ->get();

        return $esSensationEmotion;
    }
}
