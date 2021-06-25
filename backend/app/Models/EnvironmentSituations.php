<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnvironmentSituations extends Model
{
    use HasFactory;
    protected $table = "es_e_s";
    public $timestamps = false;
}
