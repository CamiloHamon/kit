<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emotions extends Model
{
    use HasFactory;
    protected $table = "em_emotions";
    public $timestamps = false;
}
