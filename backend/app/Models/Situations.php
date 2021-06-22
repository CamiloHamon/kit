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

    public function getSituations()
    {
        $environments = DB::table(('s_situations'))
            ->select('*')
            ->get();

        return $environments;
    }
}
