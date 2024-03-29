<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePetRequest extends FormRequest
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
            'name'        => 'sometimes|required',
            'species'     => 'sometimes|required',
            'dateOfBirth' => 'sometimes|required',
            'dateOfDeath' => 'sometimes',
            'note'        => 'sometimes',
        ];
    }
}
