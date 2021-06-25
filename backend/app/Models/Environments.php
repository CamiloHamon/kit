<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Environments extends Model
{
    use HasFactory;
    protected $table = "e_enviroments";
    public $timestamps = false;
}
