<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Situations extends Model
{
    use HasFactory;
    protected $table = "s_situations";
    public $timestamps = false;
}
