<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePetRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'        => 'required',
            'type'        => 'required',
            'gender'      => ['nullable', Rule::in(['Male', 'Female'])],
            'age'         => 'nullable',
            'description' => 'nullable',
            'status'      => ['required', Rule::in(['NEW', 'BOOKED', 'SOLD OUT'])],
        ];
    }
}
