<?php

namespace App\Http\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserRepository
{
    public function getUserByName($username)
    {
        $user = DB::table(('user'))
            ->where('username', $username)
            ->get();

        return $user;
    }
}
