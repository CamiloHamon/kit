<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConectorsModel extends Model
{
    use HasFactory;
    protected $table = "conectors";
    public $timestamps = false;
}
