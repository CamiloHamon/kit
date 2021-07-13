<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Http\Repositories\UserRepository;
use App\Models\User;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */

    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->middleware('jwt', ['except' => ['login', 'register']]);
        $this->userRepository = $userRepository;
    }

    public function register()
    {
        $user = new User(request()->all());
        //Validate if that username already exists.
        $valUser = $this->userRepository->getUserByEmail($user->email);

        if (count($valUser) != 0) {
            //If it exists, don't create it and notify the user that that username already exists.
            return response()->json(['message' => 'El usuario ya existe.'], 200);
        }

        //If it does not exist, register it in the database.
        $user->password = bcrypt($user->password);
        $user->rol_id = 2;

        $user->save();
        return response()->json(["data" => $user], 200);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(["email", "password"]);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    public function whoIm()
    {
        return auth()->user();
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(true);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $token = auth()->refresh();
        return response()->json([
            'token' => $token
        ]);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => [
                'id' => auth()->user()->id,
                'email' => auth()->user()->email,
                'rol' => auth()->user()->rol_id
            ]
        ]);
    }
}
