<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class EnvironmentsSituationsRepository
{
    public static function getIdEnvironmentAndSituation($idEnv, $idSit)
    {
        $environmentSituation = DB::table(('es_e_s'))
            ->select('id')
            ->where('e_enviroment_id', $idEnv)
            ->where('s_situation_id', $idSit)
            ->get();

        return $environmentSituation;
    }

    public static function getIdByEnvironmentId($idEnv)
    {
        $environmentSituation = DB::table(('es_e_s'))
            ->select('s_situation_id')
            ->where('e_enviroment_id', $idEnv)
            ->inRandomOrder()
            ->get();

        return $environmentSituation;
    }
}
