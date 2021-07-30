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

    public function updateUser($request)
    {
        $user = User::findOrFail($request->user_id);
        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        return $user;
    }

    public function updatePass($request)
    {
        $user = User::findOrFail(auth()->user()->id);
        $user->password = bcrypt($request->password);
        $user->change_pass = 0;
        return $user;
    }

    public function getUserExcludinAdministrator()
    {
        $users = DB::table('user')
            ->where('rol_id', '!=', '1')
            ->get();
        return $users;
    }
}
