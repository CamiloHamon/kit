<?php

namespace App\Http\Repositories;

use App\Models\Emotions;
use Illuminate\Support\Facades\DB;

class EmotionsRepository
{
    public static function getEmotionsByESAndSensation($idES, $idSensation)
    {
        $emotions = DB::table(('esseem_es_se_em as esse'))
            ->select('esse.id', 'em.id as id_emotion', 'em.name as emotion')
            ->join('es_e_s as es', 'es.id', 'esse.es_id')
            ->join('em_emotions as em', 'em.id', 'esse.em_emotion_id')
            ->where('esse.es_id', $idES)
            ->where('esse.se_sensation_id', $idSensation)
            ->inRandomOrder()
            ->get();

        return $emotions;
    }
}
