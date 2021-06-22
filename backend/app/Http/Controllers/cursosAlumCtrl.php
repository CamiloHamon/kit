<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CursosAlumn;
use App\Http\Controllers\cursoCtrl as CursoCtrl;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\returnSelf;

class cursosAlumCtrl extends Controller
{
    public function auxGetCursosAlum($id)
    {
        $cursos = DB::table(('cursos'))
            ->select('cursos.idCursos', 'detallecurso.nombre', 'inthoraria.hInicio', 'inthoraria.hFin')
            ->join('curso', 'cursos.curso_idCurso', 'curso.idCurso')
            ->join('detallecurso', 'curso.detalleCurso_iddetalleCurso', 'detallecurso.iddetalleCurso')
            ->join('inthoraria', 'curso.intHoraria_idIntHoraria', 'inthoraria.idIntHoraria')
            ->where('cursos.user_idUser', $id)
            ->get();
        return $cursos;
    }

    public function getCursosAlum($id)
    {
        $cursos = $this->auxGetCursosAlum($id);
        if (is_null($cursos)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($cursos, 200);
    }

    public function findCursoAlum($idStudent, $idCurso)
    {
        $cursos = DB::table(('cursos'))
            ->select('*')
            ->where('cursos.curso_idCurso', $idCurso)
            ->where('cursos.user_idUser', $idStudent)
            ->get();

        if (sizeof($cursos) == 0) return null;

        return $cursos;
    }

    public function insertCurso($idCurso, $idStudent)
    {
        $cursoAlum = new CursosAlumn();
        $cursoAlum->curso_idCurso = $idCurso;
        $cursoAlum->user_idUser = $idStudent;
        $cursoAlum->save();
        $idInsert = $cursoAlum->idCursos;
        if ($idInsert) return $cursoAlum;
        else return null;
    }

    public function addCursoToAlum($id, Request $request)
    {
        $curso = $request->input("curso");
        $horario = $request->input("horario");

        $cursoCtrl = new CursoCtrl();
        $searchCurso = $cursoCtrl->getCursosNombresById($curso);
        $searchHorario = $cursoCtrl->getHorariosByID($horario);

        if (sizeof($searchCurso) > 0 && sizeof($searchHorario) > 0) {
            $srchCurHr = $cursoCtrl->getCursoDetails($horario, $curso); //si existe este curso, si no se crea
            $cursoAdd = null;
            if (sizeof($srchCurHr) == 0) {
                $cursoAdd = $cursoCtrl->crearCurso($horario, $curso);
            } else $cursoAdd = $srchCurHr;

            //Validar si el usuario ya tiene este curso
            $json = json_decode($cursoAdd);
            $idCurso = $json[0]->idCurso;

            $srchStCurso = $this->findCursoAlum($id, $idCurso);
            if (!$srchStCurso) {
                $cursoInsert = $this->insertCurso($idCurso, $id);
                if ($cursoInsert) return response()->json($cursoInsert, 200);
                else return response()->json(['message' => 'Error'], 404);
            } else return response()->json(['message' => 'ya tiene este curso'], 203);
        } else return response()->json(['message' => 'Not found'], 404);
    }

    public function searchCurso($id)
    {
        $curso = CursosAlumn::find($id);
        if ($curso) return $curso;
        else return false;
    }

    public function deleteCurso($id)
    {
        $findCurso = $this->searchCurso($id);
        if ($findCurso) {
            DB::table('cursos')->where('idCursos', $id)->delete();
            return response()->json($findCurso, 200);
        } else return response()->json(['message' => 'Not found'], 404);
    }

    public function listCursos()
    {
        $authController = new AuthController();
        $idUser = $authController->whoIm();
        $idUser = $idUser->idUserLogin;
        $cursos = $this->auxGetCursosAlum($idUser);
        if (is_null($cursos)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($cursos, 200);
    }
}
