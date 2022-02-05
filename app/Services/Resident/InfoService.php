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
     
       $res = Resident::with('physical_address', 'mailing_address', 'previous_address', 'admission_info')->findorfail($this->id);
       
       
        return $res; 
    }
}