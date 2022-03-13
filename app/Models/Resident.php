<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UuidTrait;

class Resident extends Model
{
    use HasFactory,  UuidTrait;

    protected $fillable = ['id', 
    'user_id', 
    'company_id', 
    'group_id', 
    'first_name', 
    'middle_name',
    'last_name', 
    'email',
    'dob',
    'mobile_phone', 
    'home_phone', 
    'flags', 
    'income', 
    'military_information', 
    'mail_preference',
    'mailing_address',
    'previous_address',
    'physical_address'

];

    public function admission_info()
    {
        return $this->hasOne('App\Models\AdmissionInfo');
    }
}