<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users as UsersModel;
use App\Models\UserLogin;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class usersCtrl extends Controller
{
    public function getStudents()
    {
        $user = DB::table(('user'))
            ->select('user.*', 'userlogin.email')
            ->join('userlogin', 'user.userLogin_idUserLogin', 'userlogin.idUserLogin')
            ->where('user.rol_idRol', '=', 2)
            ->get();

        if (is_null($user)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($user, 200);
    }

    public function getStudentsById($id)
    {
        $alumno = DB::table(('user'))
            ->select('user.*', 'userlogin.email')
            ->join('userlogin', 'user.userLogin_idUserLogin', 'userlogin.idUserLogin')
            ->where('user.rol_idRol', '=', 2)
            ->where('user.idUser', '=', $id)
            ->get();
        $cursos = new cursosAlumCtrl();
        $cursos = $cursos->auxGetCursosAlum(($id));

        if (is_null($alumno)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json(['alumno' => $alumno[0], 'cursos'=> $cursos], 200);
    }

    public function getInfoUser($id)
    {
        $user = DB::table(('user'))
            ->select('user.*', 'userlogin.email')
            ->join('userlogin', 'user.userLogin_idUserLogin', 'userlogin.idUserLogin')
            ->where('user.idUser', '=', $id)
            ->get();

        if (is_null($user)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return $user;
    }

    public function crearStudent(Request $request)
    {
        $userLog = new UserLogin();
        $userLog->email = $request->input("email");
        $userLog->password = bcrypt($request->input("pass"));
        $userLog->save();
        $idInsert = $userLog->idUserLogin;
        if ($idInsert) {
            $nombre = $request->input("name");
            $tel = $request->input("tel");
            $user = new UsersModel();
            $user->nombre = $nombre;
            $user->telefono = $tel;
            $user->userLogin_idUserLogin = $idInsert;
            $user->rol_idRol = 2;
            $user->save();
            $idInsertUser = $user->idUser;
            if ($idInsertUser) {
                $userCreate = UsersModel::find($idInsertUser);
                return response()->json($userCreate, 200);
            } else return response()->json(['message' => 'Error'], 404);
        }
        return response()->json(['message' => 'Error'], 404);
    }
}
