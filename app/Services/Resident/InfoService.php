<?php

namespace App\Services\Resident;

use App\Models\Resident;
use App\Services\BaseServiceInterface;


class InfoService implements BaseServiceInterface
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function run()
    {
     
       $res = Resident::with('admission_info')->findorfail($this->id);
       
       
        return $res; 
    }
}