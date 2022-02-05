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
    'first_name', 
    'middle_name',
    'last_name', 
    'email',
    'dob',
    'mobile_phone', 
    'home_phone', 
    'flags', 
    'income', 
    'military_information', 'mail_preference'];

    public function physical_address()
    {
        return $this->hasOne('App\Models\PhysicalAddress');
    }

    public function mailing_address()
    {
        return $this->hasOne('App\Models\MailingAddress');
    }

    public function previous_address()
    {
        return $this->hasOne('App\Models\PreviousAddress');
    }

    public function admission_info()
    {
        return $this->hasOne('App\Models\AdmissionInfo');
    }
}