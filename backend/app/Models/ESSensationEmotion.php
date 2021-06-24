<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ESSensationEmotion extends Model
{
    use HasFactory;
    protected $table = "esseem_es_se_em";
    protected $primaryKey = 'id';
    public $timestamps = false;
}
