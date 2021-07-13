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
    Route::post('refresh', [AuthController::class, 'refresh']);

    //Environments
    Route::get('environments', 'App\Http\Controllers\EnvironmentsController@index');
    Route::get('environment/{id}', 'App\Http\Controllers\EnvironmentsController@show');

    //Situations
    Route::get('situations', 'App\Http\Controllers\SituationsController@index');
    Route::get('situation/{id}', 'App\Http\Controllers\SituationsController@show');
    Route::get('situations/{idEnvironment}', 'App\Http\Controllers\SituationsController@getSituationsByEnvironment');

    //Sensations
    Route::get('sensations', 'App\Http\Controllers\SensationsController@index');
    Route::get('sensation/{id}', 'App\Http\Controllers\SensationsController@show');

    //Emotions
    Route::get('emotions', 'App\Http\Controllers\EmotionsController@index');
    Route::get('emotion/{id}', 'App\Http\Controllers\EmotionsController@show');
    Route::get('emotions/{idES}/{idSensation}', 'App\Http\Controllers\EmotionsController@getEmotionsByESAndSensation');

    //Questions
    Route::get('questions', 'App\Http\Controllers\QuestionsController@index');
    Route::get('question/{id}', 'App\Http\Controllers\QuestionsController@show');
    Route::get('questions/{idESSE}', 'App\Http\Controllers\QuestionsController@getQuestionsByESSE');
    Route::get('isCorrectQuestion/{idESSE}/{idQuestion}', 'App\Http\Controllers\QuestionsController@validateQuestion');

    //Distinctions
    Route::get('distinctions', 'App\Http\Controllers\DistinctionsController@index');
    Route::get('distinction/{id}', 'App\Http\Controllers\DistinctionsController@show');
    Route::get('distinctions/{idESSEQ}', 'App\Http\Controllers\DistinctionsController@getDistinctionsByESSEQ');
    Route::get('isCorrectDistinction/{idESSEQ}/{idDistinction}', 'App\Http\Controllers\DistinctionsController@validateDistinction');

    //Resources
    Route::get('resources', 'App\Http\Controllers\ResourcesController@index');
    Route::get('resource/{id}', 'App\Http\Controllers\ResourcesController@show');
    Route::get('resources/{idESSEEQD}', 'App\Http\Controllers\ResourcesController@getResourcesByESSEQD');
    Route::get('isCorrectResource/{idESSEEQD}/{idResource}', 'App\Http\Controllers\ResourcesController@validateResource');

    //EffectiveCombinations
    Route::get('effectiveCombitation/{idEmotion}', 'App\Http\Controllers\EffectiveCombinationsController@buildCombinationByEmotionId');
});
