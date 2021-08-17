<?php

namespace App\Http\Repositories;

use App\Models\Situations;
use Illuminate\Support\Facades\DB;

class RecomendationsRepository
{
    public static function getRecomendations($type_id)
    {
        $connectors = DB::table(('conectors as c'))
            ->select('c.id', 'c.type_cards_id', 'c.text', 'tc.card')
            ->join('types_cards as tc', 'c.type_cards_id', 'tc.id')
            ->where('c.type_cards_id', $type_id)
            ->inRandomOrder()
            ->limit(1)
            ->get();

        return $connectors;
    }
}
