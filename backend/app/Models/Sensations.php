<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Sensations extends Model
{
    use HasFactory;
    protected $table = "se_sensations";
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function getSensations()
    {
        $sensations = DB::table(('se_sensations'))
            ->select('*')
            ->get();

        return $sensations;
    }
}
