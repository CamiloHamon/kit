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
    Route::get('situations', 'App\Http\Controllers\SituationsCtrl@getSituations');
    Route::get('sensations', 'App\Http\Controllers\SensationsCtrl@getSensations');
    Route::get('emotions', 'App\Http\Controllers\EmotionsCtrl@getEmotions');
    Route::get('emotions/{id}', 'App\Http\Controllers\EmotionsCtrl@getEmotionsById');

});
