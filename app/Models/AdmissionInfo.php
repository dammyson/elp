<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UuidTrait;

class AdmissionInfo extends Model
{
    use HasFactory, UuidTrait;
    protected $fillable = ['id', 
    'resident_id', 
    'ssn',  
    'pob', 
    'city',
    'medica_rec_no', 
    'medical_id_no',
    'gender',
    'race',
    'hair_color',
    'eye_color',
    'marital_status',
    'referral_type',
    'height',
    'weight',
    'religion',
    'mobility_needs',
    'language',
    'means_communication',
    'level_care',
    'vehicle_information',
    'email',
    'identifying_mark',
    'special_note',
    'scheduled_days',
    'pick_up_days',
    'drop_off_day'
];

    public function resident()
    {
        return $this->belongsTo('App\Models\Resident');
    }
}
