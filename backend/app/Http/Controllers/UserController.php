<?php

namespace App\Http\Controllers;

use App\Http\Repositories\UserRepository;
use App\Models\User;
use Illuminate\Http\Request;
use Mail;
use App\Mail\EmergencyCallReceived;

class UserController extends Controller
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user, 200);
    }

    public function getUserExcludinAdministrator()
    {
        $users = $this->userRepository->getUserExcludinAdministrator();
        return response()->json($users, 200);
    }

    public function update(Request $request)
    {
        $user = $this->userRepository->updateUser($request);
        $user->save();
        return response()->json(['update' => true]);
    }

    public function save()
    {
        $user = new User(request()->all());
        $valUser = $this->userRepository->getUserByEmail($user->email);

        if (count($valUser) != 0) {
            return response()->json(['message' => 'El usuario ya existe.', 'status' => false], 200);
        }

        $password = $this->createPassword();

        Mail::to($user->email)->send(new EmergencyCallReceived($user->name, $user->last_name, $user->email, $password));

        $user->password = bcrypt($password);
        $user->change_pass = 1;
        $user->rol_id = request("rol_id");
        $user->save();

        return response()->json(["data" => $user, "success" => true], 200);
    }



    public function delete($id)
    {
        User::where('id', $id)->delete();
        return response()->json(['deleted' => true]);
    }

    public function changePass(Request $request)
    {
        $user = $this->userRepository->updatePass($request);
        $user->save();
        return response()->json(['update' => true]);
    }

    private function createPassword()
    {
        $exp_reg = "[^A-Z0-9]";
        return substr(
            mb_eregi_replace($exp_reg, "", md5(rand())) .
                mb_eregi_replace($exp_reg, "", md5(rand())) .
                mb_eregi_replace($exp_reg, "", md5(rand())),
            0,
            12
        );
    }
}
