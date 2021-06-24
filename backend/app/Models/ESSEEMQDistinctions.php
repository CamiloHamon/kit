<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ESSEEMQDistinctions extends Model
{
    use HasFactory;
    protected $table = "esseemqd_esseemq_d";
    protected $primaryKey = 'id';
    public $timestamps = false;
}
