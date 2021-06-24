<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distinctions extends Model
{
    use HasFactory;
    protected $table = "d_distinctions";
    protected $primaryKey = 'id';
    public $timestamps = false;
}
