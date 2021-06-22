<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Users extends Model
{
    use HasFactory;

    protected $table = 'user';
    protected $primaryKey = 'idUser';
    public $timestamps = false;

    public function getUserByName($username)
    {
        $user = DB::table(('user'))
            ->where('username', $username)
            ->get();

        return $user;
    }
}
