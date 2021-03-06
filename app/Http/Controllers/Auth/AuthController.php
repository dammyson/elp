<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ForgetPasswordRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Http\Requests\Auth\CreateRequest;
use App\Http\Requests\Profile\UpdatePasswordRequest;
use App\Services\User\RegistrationService;
use App\Http\Resources\UserResource;
use App\Services\User\ForgetPassword;
use App\Support\Enum\UserStatus;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Services\Profile\UpdatePassword;
use App\Support\Enum\ClassMessages;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    /**
     * Create a new authentication controller instance.
     * @param UserRepository $users
     */

    public function create(CreateRequest $request)
    {
        $validated = $request->validated();
        try {
            $new_user = new RegistrationService($validated);
            $registered_user = $new_user->run();
            $user = new UserResource($registered_user);
            return response()->json(['status' => true, 'data' => $user, 'message' => 'registration successful'], 201);
        } catch (\Exception $exception) {
            Log::error($exception->getMessage());
            return response()->json(['status' => false,  'message' => 'Error processing request'], 500);
        }
    }

    /**
     * Handle a login request to the application.
     * @param LoginRequest $request
     */
    // public function postLogin(LoginRequest $request)
    // {
    //     $validated = $request->validated();
    //     if (auth()->attempt(['email' =>  $validated['email'], 'password' =>  $validated['password']])) {
    //         $user = Auth::user();
    //         $token = $user->createToken($validated['email'])->accessToken;
    //         $user->last_login = \Carbon\Carbon::now();
    //         $user->save();
    //         $data=[
    //             "user" => $user,
    //             "company" => (Auth::user()->companies)[0],
    //             "role" => Auth::user()->getRoleNames() 
    //         ];
           
    //         $first_time_login = false;
    //         if ($user->first_time_login) {
    //             $first_time_login = true;
    //         }
    //         return response()->json(['status' => true, 'message' => 'Login successful','token' => $token, 'data' => $user,  'first_time_login' => $first_time_login, ], 200);
    //     } else {
    //         return response()->json(['status' => false, 'message' => 'UnAuthorised'], 401);
    //     }
    // }




      /**
     * Handle a login request to the application.
     *
     * @param LoginRequest $request
     * @return \Illuminate\Http\Response
     */
    public function postLogin(LoginRequest $request)
    {
         $validated = $request->validated();
        if (auth()->attempt(['email' =>  $validated['email'], 'password' =>  $validated['password']])) {
            $user = Auth::user();
            $token = $user->createToken($validated['email'])->accessToken;
            $user->last_login = \Carbon\Carbon::now();
            $user->save();
            $data=[
                "user" => $user,
                "company" => (Auth::user()->companies)[0],
                "role" => Auth::user()->getRoleNames() 
            ];
           
            $first_time_login = false;
            if ($user->first_time_login) {
                $first_time_login = true;
            }
            return response()->json(['status' => true, 'message' => 'Login successful','token' => $token, 'data' => $user,  'first_time_login' => $first_time_login, ], 200);
        } else {
            return response()->json(['status' => false, 'message' => 'UnAuthorised'], 401);
        }
    }



    protected function setUserSession($user)
    {
        session()->forget('broadcaster_id');
        session(['agency_id' => $user->companies->first()->id]);
    }


    protected function getCredentials(Request $request)
    {
        return [
            'email' => $request->email,
            'password' => $request->password
        ];
    }
}
