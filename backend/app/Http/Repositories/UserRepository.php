<?php

namespace App\Http\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserRepository
{
    public function getUserByEmail($email)
    {
        $user = DB::table(('user'))
            ->where('email', $email)
            ->get();

        return $user;
    }
}
