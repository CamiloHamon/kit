<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnvSit extends Model
{
    use HasFactory;
    protected $table = "es_e_s";
    protected $primaryKey = 'id';
    public $timestamps = false;
}
