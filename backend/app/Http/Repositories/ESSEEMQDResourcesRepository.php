<?php

namespace App\Http\Repositories;

use App\Models\EnvSit;
use Illuminate\Support\Facades\DB;

class ESSEEMQDResourcesRepository
{
    public static function getIdESSEEMQDResources($esseemqdId, $resourceId)
    {
        $esSensationEmotion = DB::table(('esseemqdr_esseemqd_r'))
            ->select('id')
            ->where('esseemqd_id', $esseemqdId)
            ->where('r_resource_id', $resourceId)
            ->get();

        return $esSensationEmotion;
    }

    public static function getResources($esseemqdId)
    {
        $distinctions = DB::table(('esseemqdr_esseemqd_r'))
            ->select('r_resource_id', 'isCorrect')
            ->where('esseemqd_id', $esseemqdId)
            ->inRandomOrder()
            ->get();

        return $distinctions;
    }

    public static function getIsCorrectResource($esseemqdId, $resourceId)
    {
        $isCorrect = DB::table(('esseemqdr_esseemqd_r'))
            ->select('isCorrect')
            ->where('esseemqd_id', $esseemqdId)
            ->where('r_resource_id', $resourceId)
            ->get();

        return $isCorrect;
    }
}
