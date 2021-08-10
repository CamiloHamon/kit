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
        if ($request->rol_id) $user->rol_id = $request->rol_id;
        return $user;
    }

    public function updatePass($request)
    {
        $user = User::findOrFail(auth()->user()->id);
        $user->password = bcrypt($request->password);
        $user->change_pass = 0;
        return $user;
    }

    public function getPass()
    {
        $pass = DB::table('user')
            ->select('password')
            ->where('id', auth()->user()->id)
            ->get();
        return $pass;
    }

    public function getUserExcludinAdministrator()
    {
        $users = DB::table('user')
            ->select('user.id', 'user.email', 'user.name', 'user.last_name', 'user.rol_id', 'rol.rol')
            ->join('rol', 'rol.id', 'user.rol_id')
            ->where('user.rol_id', '!=', '1')
            ->where('user.rol_id', '!=', '3')
            ->get();
        return $users;
    }

    public function getUserExcludinSuperAdministrator()
    {
        $users = DB::table('user')
            ->select('user.id', 'user.email', 'user.name', 'user.last_name', 'user.rol_id', 'rol.rol')
            ->join('rol', 'rol.id', 'user.rol_id')
            ->where('rol_id', '!=', '3')
            ->get();
        return $users;
    }
}
