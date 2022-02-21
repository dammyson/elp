<?php

namespace App\Services\Group;

use App\Models\Groups;
use App\Services\BaseServiceInterface;


class CreateService implements BaseServiceInterface
{
    protected $data, $user;

    public function __construct($data, $user)
    {
        $this->data = $data;
        $this->user = $user;
    }


    public function run()
    {

        return \DB::transaction(function () {
            $new_res = Groups::create([
                'user_id' => $this->user->id,
                'company_id' => $this->user->companies[0]->id,
                'name' => $this->data['name'],
                'color' => $this->data['color'],
            ]);
            
            return $new_res;
        });
    }
   
}