<?php

namespace App\Http\Controllers;

use App\Http\Requests\Groups\StoreRequest;
use App\Http\Requests\Groups\ListRequest;
use App\Http\Resources\ResidentCollection;
use App\Http\Resources\ResidentResource;
use App\Services\Group\CreateService;
use App\Services\Group\InfoService;
use App\Services\Group\ListService;
use Illuminate\Http\Request;

class GroupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ListRequest $request)
    {
        $validated = $request->validated();

        try {
            $company_id = (\Auth::user()->companies)[0]->id;
            $client_collection = (new ListService($company_id))->run();
        } catch (\Exception $exception) {
            \Log::error($exception->getMessage());
            return response()->json(['status' => false, 'mesage' => 'Error processing request '.$exception->getMessage(), 'data' => $exception], 500);
        }
        return response()->json(['status' => true, 'message' => 'List of products', 'data' =>  $client_collection], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $validated = $request->validated();
        $user = \Auth::user();
        try {
            $new_client = (new CreateService($validated, $user))->run();
        } catch (\Exception $exception) {
            return response()->json(['status' => false, 'mesage' => 'Error processing request - '.$exception->getMessage(), 'data' => $exception], 500);
        }
        return response()->json(['status' => true, 'message' => 'New Post created', 'data' =>  $new_client], 201);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      
        try {
            $single_res = new ResidentResource((new InfoService($id))->run());
         } catch (\Exception $exception) {
             \Log::error($exception->getMessage());
             return response()->json(['status' => false, 'mesage' => 'Error processing request - '.$exception->getMessage(), 'data' => $exception], $exception->getCode());
         }
         return response()->json(['status' => true, 'message' => 'showing product details', 'data' =>  $single_res], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
