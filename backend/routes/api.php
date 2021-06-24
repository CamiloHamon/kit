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

Route::group(['middleware' => ['jwt.verify']], function () {
    //Auth
    Route::get('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);

    //let's talk
    Route::get('environments', 'App\Http\Controllers\EnvironmentsCtrl@getEnvironments');
    Route::get('situations/{idEnvironment}', 'App\Http\Controllers\SituationsCtrl@showSituations');
    Route::get('sensations', 'App\Http\Controllers\SensationsCtrl@getSensations');
    Route::get('emotions/{idEnv}/{idSit}/{idSensation}', 'App\Http\Controllers\EmotionsCtrl@showEmotions');
    Route::get('emotions/{id}', 'App\Http\Controllers\EmotionsCtrl@getEmotionsById');
    Route::get('showQuestions/{idEnv}/{idSit}/{idSensation}/{idEmotion}', 'App\Http\Controllers\QuestionsCtrl@showQuestions');
    Route::get('question/{id}', 'App\Http\Controllers\QuestionsCtrl@getQuestionById');
    Route::get('isCorrectQuestion/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}', 'App\Http\Controllers\QuestionsCtrl@validateQuestion');
    Route::get('showDistinctions/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}', 'App\Http\Controllers\DistinctionsCtrl@showDistinctions');
    Route::get('distinction/{id}', 'App\Http\Controllers\DistinctionsCtrl@getDistinctionById');
    Route::get('isCorrectDistinction/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}/{idDistinction}', 'App\Http\Controllers\DistinctionsCtrl@validateDistinction');
    Route::get('showResources/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}/{idDistinction}', 'App\Http\Controllers\ResourcesCtrl@showResources');
    Route::get('resource/{id}', 'App\Http\Controllers\ResourcesCtrl@getResourceById');
    Route::get('isCorrectResource/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}/{idDistinction}/{idResource}', 'App\Http\Controllers\ResourcesCtrl@validateResource');
});
