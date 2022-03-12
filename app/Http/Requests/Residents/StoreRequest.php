<?php

namespace App\Http\Requests\Residents;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'sometimes|required|string',
            'middle_name' => 'sometimes|required|string',
            'last_name' => 'sometimes|required|string',
            'nick_name' => 'sometimes|required|string',
            'dob' => 'sometimes|required|string',
            'mobile_phone' => 'sometimes|required|string',
            'home_phone' => 'sometimes|required|string',
            'email' => 'sometimes|required|string',
            'physical_address.address_line_1' => 'sometimes|required|string',
            'physical_address.address_line_2' => 'sometimes|required|string',
            'physical_address.city' => 'sometimes|required|string',
            'physical_address.state' => 'sometimes|required|string',
            'physical_address.zip' => 'sometimes|required|string',
            'previous_address.address_line_1' => 'sometimes|required|string',
            'previous_address.address_line_2' => 'sometimes|required|string',
            'previous_address.city' => 'sometimes|required|string',
            'previous_address.state' => 'sometimes|required|string',
            'previous_address.zip' => 'sometimes|required|string',
            'mailing_address.address_line_1' => 'sometimes|required|string',
            'mailing_address.address_line_2' => 'sometimes|required|string',
            'mailing_address.city' => 'sometimes|required|string',
            'mailing_address.state' => 'sometimes|required|string',
            'mailing_address.zip' => 'sometimes|required|string',
            'admission_info.ssn' => 'sometimes|required|string',
            'admission_info.pob' => 'sometimes|required|string',
            'admission_info.medica_rec_no' => 'sometimes|required|string',
            'admission_info.medical_id_no' => 'sometimes|required|string',
            'admission_info.gender' => 'sometimes|required|string',
            'admission_info.race' => 'sometimes|required|string',
            'admission_info.hair_color' => 'sometimes|required|string',
            'admission_info.eye_color' => 'sometimes|required|string',
            'admission_info.marital_status' => 'sometimes|required|string',
            'admission_info.referral_type' => 'sometimes|required|string',
            'admission_info.height' => 'sometimes|required|string',
            'admission_info.weight' => 'sometimes|required|string',
            'admission_info.religion' => 'sometimes|required|string',
            'admission_info.mobility_needs' => 'sometimes|required|string',
            'admission_info.language' => 'sometimes|required|string',
            'admission_info.means_communication' => 'sometimes|required|string',
            'admission_info.level_care' => 'sometimes|required|string',
            'admission_info.vehicle_information' => 'sometimes|required|string',
            'admission_info.email' => 'sometimes|required|string',
            'admission_info.identifying_mark' => 'sometimes|required|string',
            'admission_info.special_note' => 'sometimes|required|string',
            'admission_info.scheduled_days.monday' => 'sometimes|required|boolean',
            'admission_info.scheduled_days.tuesday' => 'sometimes|required|boolean',
            'admission_info.scheduled_days.wednesday' => 'sometimes|required|boolean',
            'admission_info.scheduled_days.thursday' => 'sometimes|required|boolean',
            'admission_info.scheduled_days.friday' => 'sometimes|required|boolean',
            'admission_info.pick_up_days.monday' => 'sometimes|required|boolean',
            'admission_info.pick_up_days.tuesday' => 'sometimes|required|boolean',
            'admission_info.pick_up_days.wednesday' => 'sometimes|required|boolean',
            'admission_info.pick_up_days.thursday' => 'sometimes|required|boolean',
            'admission_info.pick_up_days.friday' => 'sometimes|required|boolean',
            'admission_info.drop_off_day.monday' => 'sometimes|required|boolean',
            'admission_info.drop_off_day.tuesday' => 'sometimes|required|boolean',
            'admission_info.drop_off_day.wednesday' => 'sometimes|required|boolean',
            'admission_info.drop_off_day.thursday' => 'sometimes|required|boolean',
            'admission_info.drop_off_day.friday' => 'sometimes|required|boolean',
            'flags.two_person_assist_mobilty'=> 'sometimes|required|boolean',
            'flags.advanced_directive'=> 'sometimes|required|boolean',
            'flags.alcohol_order'=> 'sometimes|required|boolean',
            'flags.beauty_shop'=> 'sometimes|required|boolean',
            'flags.chf_factors'=> 'sometimes|required|boolean',
            'flags.cpr'=> 'sometimes|required|boolean',
            'flags.decision_making_capacity_risk'=> 'sometimes|required|boolean',
            'flags.dementia'=> 'sometimes|required|boolean',
            'flags.diabetic'=> 'sometimes|required|boolean',
            'flags.dni'=> 'sometimes|required|boolean',
            'flags.dnr_order_signed_by_physician'=> 'sometimes|required|boolean',
            'flags.do_not_intubate'=> 'sometimes|required|boolean',
            'flags.elopment_risk'=> 'sometimes|required|boolean',
            'flags.etoh_use'=> 'sometimes|required|boolean',
            'flags.fall_risk'=> 'sometimes|required|boolean',
            'flags.flight_risk'=> 'sometimes|required|boolean',
            'flags.food_allergies'=> 'sometimes|required|boolean',
            'flags.full_code'=> 'sometimes|required|boolean',
            'flags.guadianship'=> 'sometimes|required|boolean',
            'flags.history_of_illicit_drug_use'=> 'sometimes|required|boolean',
            'flags.iddm'=> 'sometimes|required|boolean',
            'flags.laundry'=> 'sometimes|required|boolean',
            'flags.living_will'=> 'sometimes|required|boolean',
            'flags.living_will_dnr'=> 'sometimes|required|boolean',
            'flags.medicine_allergies'=> 'sometimes|required|boolean',
            'flags.molst'=> 'sometimes|required|boolean',
            'flags.most'=> 'sometimes|required|boolean',
            'flags.newspaper'=> 'sometimes|required|boolean',
            'flags.non_english_speaking'=> 'sometimes|required|boolean',
            'flags.ohdnr'=> 'sometimes|required|boolean',
            'flags.other_allergies'=> 'sometimes|required|boolean',
            'flags.pacemaker'=> 'sometimes|required|boolean',
            'flags.polst'=> 'sometimes|required|boolean',
            'flags.post'=> 'sometimes|required|boolean',
            'flags.power_of_attorney'=> 'sometimes|required|boolean',
            'flags.proxy_caregiver'=> 'sometimes|required|boolean',
            'flags.receiver_antibiotics'=> 'sometimes|required|boolean',
            'flags.receiver_anticoagulant'=> 'sometimes|required|boolean',
            'flags.receiver_psychoropics'=> 'sometimes|required|boolean',
            'flags.resident_secure_demential_unit'=> 'sometimes|required|boolean',
            'flags.served_oversea'=> 'sometimes|required|boolean',
            'flags.smoker'=> 'sometimes|required|boolean',
            'flags.suffocation_risk'=> 'sometimes|required|boolean',
            'income.city_subsidy'=> 'sometimes|required|boolean',
            'military_information.air_force'=> 'sometimes|required|boolean',
            'mail_preference.open_all_email'=> 'sometimes|required|boolean',




        ];
    }
}

    