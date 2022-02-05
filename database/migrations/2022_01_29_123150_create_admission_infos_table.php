<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmissionInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admission_infos', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('resident_id')->index();
            $table->string('ssn')->default('');
            $table->string('pob')->default('');
            $table->string('medica_rec_no')->default('');
            $table->string('medical_id_no')->default('');
            $table->string('gender')->default('');
            $table->string('race')->default('');
            $table->string('hair_color')->default(''); 
            $table->string('eye_color')->default('');
            $table->string('marital_status')->default('');
            $table->string('referral_type')->default('');
            $table->string('height')->default('');
            $table->string('weight')->default('');
            $table->string('religion')->default('');
            $table->string('mobility_needs')->default('');
            $table->string('language')->default('');
            $table->string('means_communication')->default('');
            $table->string('level_care')->default('');
            $table->string('vehicle_information')->default('');
            $table->string('email')->default('');
            $table->string('identifying_mark')->default('');
            $table->string('special_note')->default('');
            $table->json('scheduled_days')->nullable();
            $table->json('pick_up_days')->nullable();
            $table->json('drop_off_day')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admission_infos');
    }
}
