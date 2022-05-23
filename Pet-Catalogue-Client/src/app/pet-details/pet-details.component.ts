import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})

export class PetDetailsComponent implements OnInit {
  pet : Pet = new Pet();
  constructor(
    private route : ActivatedRoute,
    private petSerivce : PetService,
    private location : Location,
  ) { }

  async ngOnInit() {
    const id  =  +this.route.snapshot.paramMap.get('id')!;
    const pet = await this.petSerivce.getPet(id);
    if (pet){
      this.pet = pet;
    }
  }

  async handleDelte() {
    await this.petSerivce.deltePet(this.pet.id);
    this.location.back();
  }

}
