<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('residents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->index();
            $table->uuid('company_id')->index();
            $table->uuid('group_id')->index();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('nick_name')->nullable();
            $table->string('dob', 15)->nullable();
            $table->string('avatar')->nullable();
            $table->string('mobile_phone', 15)->nullable();
            $table->string('home_phone', 15)->nullable();
            $table->string('email', 50)->unique();
            $table->string('mailing_address', 50)->unique();
            $table->string('physical_address', 50)->unique();
            $table->string('previous_address', 50)->unique();
            $table->json('flags')->nullable();
            $table->json('income')->nullable();
            $table->json('military_information')->nullable();
            $table->json('mail_preference')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('residents');
    }
}
