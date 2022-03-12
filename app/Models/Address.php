<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UuidTrait;

class Address extends Model
{
    use HasFactory, UuidTrait;
    protected $fillable = ['id', 'address_line_1',  'address_line_2', 'city','state', 'zip', 'type'];
}
