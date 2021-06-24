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
    //Environments
    Route::get('environments', 'App\Http\Controllers\EnvironmentsCtrl@getAllEnvironments');

    //Situations
    Route::get('situations/{idEnv}', 'App\Http\Controllers\SituationsCtrl@showSituations');
    
    //Sensations
    Route::get('sensations', 'App\Http\Controllers\SensationsCtrl@getAllSensations');

    //Emotions
    Route::get('emotions', 'App\Http\Controllers\EmotionsCtrl@getAllEmotions');
    Route::get('emotion/{id}', 'App\Http\Controllers\EmotionsCtrl@getEmotionsById');
    Route::get('emotions/{idEnv}/{idSit}/{idSensation}', 'App\Http\Controllers\EmotionsCtrl@showEmotions');

    //Questions
    Route::get('questions', 'App\Http\Controllers\QuestionsCtrl@getAllQuestions');
    Route::get('question/{id}', 'App\Http\Controllers\QuestionsCtrl@getQuestionById');
    Route::get('showQuestions/{idEnv}/{idSit}/{idSensation}/{idEmotion}', 'App\Http\Controllers\QuestionsCtrl@showQuestions');
    Route::get('isCorrectQuestion/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}', 'App\Http\Controllers\QuestionsCtrl@validateQuestion');

    //Distinctions
    Route::get('distinctions', 'App\Http\Controllers\DistinctionsCtrl@getAllDistinctions');
    Route::get('distinction/{id}', 'App\Http\Controllers\DistinctionsCtrl@getDistinctionById');
    Route::get('showDistinctions/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}', 'App\Http\Controllers\DistinctionsCtrl@showDistinctions');
    Route::get('isCorrectDistinction/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}/{idDistinction}', 'App\Http\Controllers\DistinctionsCtrl@validateDistinction');

    //Resources
    Route::get('resource/{id}', 'App\Http\Controllers\ResourcesCtrl@getResourceById');
    Route::get('resources', 'App\Http\Controllers\ResourcesCtrl@getAllResources');
    Route::get('showResources/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}/{idDistinction}', 'App\Http\Controllers\ResourcesCtrl@showResources');
    Route::get('isCorrectResource/{idEnv}/{idSit}/{idSensation}/{idEmotion}/{idQuestion}/{idDistinction}/{idResource}', 'App\Http\Controllers\ResourcesCtrl@validateResource');
});
