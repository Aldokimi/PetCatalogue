import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component : MainPageComponent
  },
  {
    path: "pets",
    component : PetListComponent
  },
  {
    path: "pets/:id",
    component : PetDetailsComponent
  },
  {
    path: "pets/addPet/new",
    component : PetEditComponent
  },
  {
    path: "pets/:id/edit",
    component: PetEditComponent
  },
  {
    path : "profile",
    component : ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
