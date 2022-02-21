<?php

namespace App\Services\Group;

use App\Models\Groups;
use App\Services\BaseServiceInterface;


class ListService implements BaseServiceInterface
{
   

    public function __construct($company_id)
    {
        $this->company_id = $company_id;
    }

    public function run()
    {
            return Groups::latest()->get();
       
    }
}