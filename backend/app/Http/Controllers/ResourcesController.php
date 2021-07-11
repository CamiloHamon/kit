<?php

namespace App\Http\Controllers;

use App\Http\Repositories\ResourcesRepository;
use App\Models\Resources;
use Illuminate\Http\Request;

class ResourcesController extends Controller
{
    private $resourcesRepository;

    public function __construct(ResourcesRepository $resourcesRepository)
    {
        $this->resourcesRepository = $resourcesRepository;
    }

    public function index()
    {
        $resources = Resources::all();
        return response()->json($resources, 200);
    }

    public function show($id)
    {
        $resource = Resources::find($id);
        return response()->json($resource, 200);
    }

    public function getResourcesByESSEQD($idESSEQD)
    {
        $resources = $this->resourcesRepository->getResourcesByESSEQD($idESSEQD);
        return response()->json($resources, 200);
    }

    public function validateResource($idESSEQD, $idResource)
    {
        $isCorrectResource = $this->resourcesRepository->validateResource($idESSEQD, $idResource);
        return response()->json($isCorrectResource, 200);
    }
}
