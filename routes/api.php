<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CompanyController;

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



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['namespace' => 'Auth'], function () {
    Route::post('login',  [AuthController::class,'postLogin'])->name('auth.login');
    Route::post('registration', [AuthController::class,'create'])->name('auth.registration');
    Route::get('activate/{id}', [AuthController::class,'activate'])->name('auth.activate');
    Route::post('forget-password',[AuthController::class,'activate'])->name('forget.password');
    Route::get('/change-password-verification/{id}',[AuthController::class,'CheckCanUpdatePassword'])->name('forget.password_verification')->middleware('signed');
    Route::post('/change-password/{id}',[AuthController::class,'updatePassword'])->name('password.change');
});


Route::post('/company', [CompanyController::class,'update'])->middleware('auth:api')->name('company.update');

Route::prefix('users')->group(function () {
    Route::post('/',[UserController::class,'create'])->middleware('auth:api')->name('users.invite');
    Route::get('/',  [UserController::class,'list'])->middleware('auth:api')->name('users.list');
    Route::post('/{id}/resend-invitaion', [UserController::class,'resend'])->middleware('auth:api')->name('users.reinvite');
    Route::post('/{id}',[UserController::class,'update'])->middleware('auth:api')->name('users.update.role');//
    Route::delete('/{id}', [UserController::class,'destroy'])->middleware('auth:api')->name('user.delete'); 
    Route::post('/{id}/status', [UserController::class,'updateStatus'])->middleware('auth:api')->name('users.update');//
    Route::post('/complete-account/{id}',[UserController::class,'completeRegistrationAccount'])->name('user.complete_registration');
    Route::get('/complete-account-verification/{id}', [UserController::class,'CheckCanCompleteAccount'])->name('user.complete_registration_verification')->middleware('signed'); 
    Route::get('/roles', [UserController::class,'listRoles'])->name('users.roles');
    Route::post('/account/{id}', [UserController::class,'completeRegistrationAccount'])->name('user.invitation'); 
});
