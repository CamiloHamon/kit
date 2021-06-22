<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Curso as CursoModel;

class cursoCtrl extends Controller
{
    public function getHorarios()
    {
        $horarios = DB::table(('inthoraria'))
            ->select('*')
            ->get();
        if (is_null($horarios)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($horarios, 200);
    }

    public function getHorariosByID($id)
    {
        $horarios = DB::table(('inthoraria'))
            ->select('*')
            ->where('inthoraria.idIntHoraria', $id)
            ->get();
        if (is_null($horarios)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return $horarios;
    }

    public function getCursosNombres()
    {
        $cursos = DB::table(('detallecurso'))
            ->select('*')
            ->get();
        if (is_null($cursos)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($cursos, 200);
    }

    public function getCursosNombresById($id)
    {
        $cursos = DB::table(('detallecurso'))
            ->select('*')
            ->where('detallecurso.iddetallecurso', $id)
            ->get();
        if (is_null($cursos)) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return $cursos;
    }

    public function getCursoDetails($idInH, $idDetalle)
    {
        $cursos = DB::table(('curso'))
            ->select('*')
            ->where('curso.intHoraria_idIntHoraria', $idInH)
            ->where('curso.detalleCurso_iddetalleCurso', $idDetalle)
            ->get();

        if (is_null($cursos)) {
            return false;
        }
        return $cursos;
    }

    public function crearCurso($horario, $curso)
    {
        $newCurso = new CursoModel();
        $newCurso->intHoraria_idIntHoraria = $horario;
        $newCurso->detalleCurso_iddetalleCurso = $curso;
        $newCurso->save();
        $idInsertCurso = $newCurso->idCurso;
        if ($idInsertCurso) return $newCurso;
        return false;
    }
}
