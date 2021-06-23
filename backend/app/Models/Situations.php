<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Situations extends Model
{
    use HasFactory;
    protected $table = "s_situations";
    protected $primaryKey = 'id';
    public $timestamps = false;

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
