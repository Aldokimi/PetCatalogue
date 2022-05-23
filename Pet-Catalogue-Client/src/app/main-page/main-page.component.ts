import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  

  deadPets  = 0;
  alivePets = 0;

  constructor(
    private petSerivce : PetService,
  ) { }


  async filterPets(){
    
    const pets = await this.petSerivce.getPets();
    pets.forEach(pet => {
      if (formatDate(pet.dateOfBirth,'yyyy-MM-dd','en_US') < formatDate(pet.dateOfDeath, 'yyyy/MM/dd', 'en')){
        this.deadPets  += 1;
      }else{
        this.alivePets += 1;
      }
    });  
  }
  
  ngOnInit(): void {
    this.filterPets();
  }
}
