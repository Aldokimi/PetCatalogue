import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})

export class PetFormComponent implements OnInit {
  @Input() pet = new Pet;
  @Output() save = new EventEmitter<Pet>();

  public petForm = this.fb.group({
    name        : ['', [Validators.required]],
    species     : ['', [Validators.required, Validators.pattern(/^PET-\d+/)]],
    dateOfBirth : ['', [Validators.required]],
    dateOfDeath : ['', [Validators.required]],
    note        : ['', [Validators.required]],
  });

  get name() {
    return this.petForm.get('name');
  }

  get species() {
    return this.petForm.get('species');
  }

  get dateOfBirth() {
    return this.petForm.get('dateOfBirth');
  }

  get dateOfDeath() {
    return this.petForm.get('dateOfDeath');
  }

  get note() {
    return this.petForm.get('note');
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.petForm.patchValue(this.pet);
  }

  onSubmit(): void {
    console.log("onSubmit")
      this.save.emit(this.petForm.value);
  }

}
