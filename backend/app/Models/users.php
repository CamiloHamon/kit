<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class users extends Model
{

    protected $table = "user";
    protected $primaryKey = 'idUser';
    public $timestamps = false;

    public function listStudents()
    {
        $user = DB::table(('user'))
            ->where('rol_idRol', '=', 2)
            ->get();

        return $user;
    }
}
