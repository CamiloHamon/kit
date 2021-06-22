<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CursosAlumn extends Model
{
    protected $table = "cursos";
    protected $primaryKey = 'idCursos';
    public $timestamps = false;
}
