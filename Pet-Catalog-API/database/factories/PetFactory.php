<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name'        => $this->faker->name(),
            'type'        => $this->faker->numerify("PET-####"),
            'gender'      => $this->faker->randomElement(['Male', 'Female']),
            'age'         => $this->faker->numberBetween(1,20),
            'description' => $this->faker->sentence(),
            'status'      => $this->faker->randomElement(['NEW', 'BOOKED', 'SOLD OUT']),
        ];
    }
}
