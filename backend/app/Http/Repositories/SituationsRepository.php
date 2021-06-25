<?php

namespace App\Http\Repositories;

use App\Models\Situations;
use Illuminate\Support\Facades\DB;

class SituationsRepository
{
    public static function getSituationsByEnvironment($idEnv)
    {
        $situations = DB::table(('es_e_s as es'))
            ->select('es.id', 's.id as id_situation', 's.name as situation')
            ->join('e_environments as e', 'e.id', 'es.e_environment_id')
            ->join('s_situations as s', 's.id', 'es.s_situation_id')
            ->where('es.e_environment_id', $idEnv)
            ->inRandomOrder()
            ->get();

        return $situations;
    }
}
