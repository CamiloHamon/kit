<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ESSEEMQuestions extends Model
{
    use HasFactory;
    protected $table = "esseemq_esseem_q";
    protected $primaryKey = 'id';
    public $timestamps = false;
}
