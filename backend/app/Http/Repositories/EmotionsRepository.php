<?php

namespace App\Http\Repositories;

use App\Models\Emotions;
use Illuminate\Support\Facades\DB;

class EmotionsRepository
{
    public static function getFourEmotions()
    {
        $emotions = DB::table(('em_emotions'))
            ->select('*')
            ->inRandomOrder()
            ->limit(4)
            ->get();

        return $emotions;
    }
}
