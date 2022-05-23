import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  pet : Pet = new Pet();


  constructor(
    private route : ActivatedRoute,
    private petSerivce : PetService,
    private location : Location
  ) { }

  async ngOnInit() {
    const urlID = this.route.snapshot.paramMap.get('id');
    if(urlID){
      const id  =  +urlID;
      const pet = await this.petSerivce.getPet(id);
      if (pet){
        this.pet = pet;
      }
    }
  }

  async handleSave(pet : Pet){
    if(this.pet.id){
      await this.petSerivce.updatePet(this.pet.id, pet);
    }else{
      const pety = await this.petSerivce.addPet(pet);
    }
    this.location.back();
  }

}
