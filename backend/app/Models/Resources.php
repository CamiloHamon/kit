<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resources extends Model
{
    use HasFactory;
    protected $table = "r_resources";
    protected $primaryKey = 'id';
    public $timestamps = false;
}
