<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LaravueController extends Controller
{
     /**
     * Entry point for Laravue Dashboard
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('laravue');
    }
}
