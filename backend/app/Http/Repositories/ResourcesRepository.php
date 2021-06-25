<?php

namespace App\Http\Repositories;

use App\Models\Situations;
use Illuminate\Support\Facades\DB;

class ResourcesRepository
{
    public static function getResourcesByESSEQD($idESSEQD)
    {
        $resources = DB::table(('esseemqdr_esseemqd_r as esseqdr'))
            ->select('esseqdr.id', 'r.id as id_resource', 'r.name as resource')
            ->join('esseemqd_esseemq_d as esseqd', 'esseqd.id', 'esseqdr.esseemqd_id')
            ->join('r_resources as r', 'r.id', 'esseqdr.r_resource_id')
            ->where('esseqdr.esseemqd_id', $idESSEQD)
            ->inRandomOrder()
            ->get();

        return $resources;
    }

    public static function validateResource($idESSEQD, $idResource)
    {
        $isCorrectResource = DB::table(('esseemqdr_esseemqd_r as esseqdr'))
            ->select('esseqdr.id', 'esseqdr.isCorrect')
            ->join('esseemqd_esseemq_d as esseqd', 'esseqd.id', 'esseqdr.esseemqd_id')
            ->join('r_resources as r', 'r.id', 'esseqdr.r_resource_id')
            ->where('esseqdr.esseemqd_id', $idESSEQD)
            ->where('esseqdr.r_resource_id', $idResource)
            ->inRandomOrder()
            ->get();

        return $isCorrectResource;
    }
}
