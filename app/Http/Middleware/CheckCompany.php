<?php

namespace App\Http\Middleware;

use App\Models\Company;
use Closure;
use Illuminate\Http\Request;

class CheckCompany
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Extract the subdomain from URL.
        list($subdomain) = explode('.', $request->getHost(), 2);

        // Retrieve requested tenant's info from database. If not found, abort the request.
        $tenant = Company::where('slug', $subdomain)->firstOrFail();
        
        // Store the tenant info into session.
        $request->session()->put('tenant', $tenant);

        return $next($request);
        //Check the user company ensure it matches the the subdomanin
    }
}
