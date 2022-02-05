<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UuidTrait;

class PhysicalAddress extends Model
{
    use HasFactory, UuidTrait;
    protected $fillable = ['id', 'resident_id', 'address_line_1',  'address_line_2', 'city','state', 'zip'];

    public function resident()
    {
        return $this->belongsTo('App\Models\Resident');
    }
}