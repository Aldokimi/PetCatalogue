import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    PetListComponent,
    ProfileComponent,
    FooterComponent,
    PetFormComponent,
    PetEditComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
