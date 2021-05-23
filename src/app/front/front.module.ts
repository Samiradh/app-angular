import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChambresComponent } from './chambres/chambres.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [  FrontRoutingModule.components,
    HomeComponent,
    HeaderComponent,
    ChambresComponent,
    ReservationComponent,
    LoginComponent,
    RegisterComponent],
    
  imports: [
    CommonModule,
    FrontRoutingModule,
    FormsModule
  ]
})
export class FrontModule { }
