<?php

namespace App\Services\Resident;

use App\Models\Resident;
use App\Services\BaseServiceInterface;


class ListService implements BaseServiceInterface
{
   

    public function __construct($company_id)
    {
        $this->company_id = $company_id;
    }

    public function run()
    {
            return Resident::with('admission_info')->where('company_id', $this->company_id)->latest()->get();
       
    }
}