<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UuidTrait;

class Groups extends Model
{
    use HasFactory;
    use UuidTrait;

    protected $fillable = [
    'id', 
    'user_id', 
    'company_id',  
    'name', 
    'color'
];


}
