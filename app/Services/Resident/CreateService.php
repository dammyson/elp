<?php

namespace App\Services\Resident;

use App\Models\AdmissionInfo;
use App\Models\MailingAddress;
use App\Models\PhysicalAddress;
use App\Models\PreviousAddress;
use App\Models\Resident;
use App\Services\BaseServiceInterface;


class CreateService implements BaseServiceInterface
{
    protected $data, $user;

    public function __construct($data, $user)
    {
        $this->data = $data;
        $this->user = $user;
    }


    public function run()
    {

        return \DB::transaction(function () {
            $new_res = Resident::create([
                'user_id' => $this->user->id,
                'company_id' => $this->user->companies[0]->id,
                'first_name' => $this->data['first_name'],
                'middle_name' => $this->data['middle_name'],
                'last_name' => $this->data['last_name'],
                'nick_name' => $this->data['nick_name'],
                'dob' => $this->data['dob'],
                'email' => $this->data['email'],
                'mobile_phone' => $this->data['mobile_phone'],
                'home_phone' => $this->data['home_phone'],
                'flags' => json_encode($this->data['flags']),
                'income' => json_encode($this->data['income']),
                'military_information' => json_encode($this->data['military_information']),
                'mail_preference' => json_encode($this->data['mail_preference']),
                
            ]);
            if (property_exists((object)$this->data, 'physical_address')) {
                $this->createPhysicalAddress($this->data['physical_address'],$new_res->id);
            }

            if (property_exists((object)$this->data, 'mailing_address')) {
                $this->createMailingAddress($this->data['mailing_address'],$new_res->id);
            }

            if (property_exists((object)$this->data, 'previous_address')) {
                $this->createPreviousAddress($this->data['previous_address'],$new_res->id);
            }

            if (property_exists((object)$this->data, 'admission_info')) {
                $this->createAdmissionInfo($this->data['admission_info'],$new_res->id);
            }
           
            return $new_res;
        });
    }


    public function createAdmissionInfo($data, $res_id)
    {
       
                     AdmissionInfo::create([
                        'resident_id' => $res_id,
                        'ssn' => $data['ssn'],
                        'pob' => $data['pob'],
                        'medica_rec_no' => $data['medica_rec_no'],
                        'medical_id_no' => $data['medical_id_no'],
                        'gender' => $data['gender'],
                        'race' => $data['race'],
                        'hair_color' => $data['hair_color'],
                        'eye_color' => $data['eye_color'],
                        'marital_status' => $data['marital_status'],
                        'referral_type' => $data['referral_type'],
                        'height' => $data['height'],
                        'weight' => $data['weight'],
                        'religion' => $data['religion'],
                        'mobility_needs' => $data['mobility_needs'],
                        'language' => $data['language'],
                        'means_communication' => $data['means_communication'],
                        'level_care' => $data['level_care'],
                        'vehicle_information' => $data['vehicle_information'],
                        'email' => $data['email'],
                        'identifying_mark' => $data['identifying_mark'],
                        'special_note' => $data['special_note'],
                        'scheduled_days' => json_encode($data['scheduled_days']),
                        'pick_up_days' => json_encode($data['pick_up_days']),
                        'drop_off_day' =>json_encode($data['drop_off_day']),
                     ]);
                
            

            return true;
    }


    public  function converArrayToString($array){
       

        return 'jjjjj';

    }


    public function createPhysicalAddress($data, $res_id)
    {
                     PhysicalAddress::create([
                        'resident_id' => $res_id,
                        'address_line_1' => $data['address_line_1'],
                        'address_line_2' => $data['address_line_1'],
                        'city' => $data['address_line_1'],
                        'state' => $data['address_line_1'],
                        'zip' => $data['address_line_1'],
                     ]);
                
            

            return true;
    }


    public function createMailingAddress($data, $res_id)
    {
                     MailingAddress::create([
                        'resident_id' => $res_id,
                        'address_line_1' => $data['address_line_1'],
                        'address_line_2' => $data['address_line_1'],
                        'city' => $data['address_line_1'],
                        'state' => $data['address_line_1'],
                        'zip' => $data['address_line_1'],
                     ]);
                
            

            return true;
    }

    public function createPreviousAddress($data, $res_id)
    {
                     PreviousAddress::create([
                        'resident_id' => $res_id,
                        'address_line_1' => $data['address_line_1'],
                        'address_line_2' => $data['address_line_1'],
                        'city' => $data['address_line_1'],
                        'state' => $data['address_line_1'],
                        'zip' => $data['address_line_1'],
                     ]);
                
            

            return true;
    }


   
}