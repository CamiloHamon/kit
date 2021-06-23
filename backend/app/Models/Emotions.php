<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Emotions extends Model
{
    use HasFactory;
    protected $table = "em_emotions";
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function getFourEmotions()
    {
        $emotions = DB::table(('em_emotions'))
            ->select('*')
            ->inRandomOrder()
            ->limit(4)
            ->get();

        return $emotions;
    }
}
