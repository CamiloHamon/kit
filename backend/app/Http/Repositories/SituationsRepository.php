<?php

namespace App\Http\Repositories;

use App\Models\Situations;
use Illuminate\Support\Facades\DB;

class SituationsRepository
{
    public static function getThreeSituations()
    {
        $environments = DB::table(('s_situations'))
            ->select('*')
            ->inRandomOrder()
            ->limit(3)
            ->get();

        return $environments;
    }
}
