<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Environments extends Model
{
    use HasFactory;
    protected $table = "e_environments";
    public $timestamps = false;
}
