<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Auth
Route::group([
    'prefix' => 'auth'

], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
});

//Admin y Student
Route::group(['middleware' => ['jwt.verify']], function () {
    //Auth
    Route::get('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);

    //Administrador
    Route::get('listStudents', 'App\Http\Controllers\usersCtrl@getStudents'); //listar todos los estudiantes

    Route::get('student/{id}', 'App\Http\Controllers\usersCtrl@getStudentsById'); //ver informacion del estudiante

    Route::post('student', 'App\Http\Controllers\usersCtrl@crearStudent'); //agregar estudiante

    Route::get('cursosAlum/{id}', 'App\Http\Controllers\cursosAlumCtrl@getCursosAlum'); //listar todos los cursos del estudiante

    Route::get('horarios', 'App\Http\Controllers\cursoCtrl@getHorarios'); //listar todos los horarios disponibles

    Route::get('/cursos/all', 'App\Http\Controllers\cursoCtrl@getCursosNombres'); //listar todos los cursos disponibles

    Route::post('/cursosAlum/{id}', 'App\Http\Controllers\cursosAlumCtrl@addCursoToAlum'); //listar todos los cursos disponibles

    Route::delete('/cursosAlum/{id}', 'App\Http\Controllers\cursosAlumCtrl@deleteCurso'); //borrar curso

    //Estudiante
    Route::get('/cursosAlum', 'App\Http\Controllers\cursosAlumCtrl@listCursos'); //Listar todos los cursos del estudiante

});
