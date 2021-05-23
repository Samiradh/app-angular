import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntAdminComponent } from '../interfaces/int-admin/int-admin.component';
import { IntClientComponent } from '../interfaces/int-client/int-client.component';
import { IntEmployeComponent } from '../interfaces/int-employe/int-employe.component';

import { IntReceptionnisteComponent } from '../interfaces/int-receptionniste/int-receptionniste.component';
import { IntResponsableComponent } from '../interfaces/int-responsable/int-responsable.component';
import { ChambresComponent } from './chambres/chambres.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
{path:"", component: HomeComponent},
{path:"chambres", component:ChambresComponent},
{path:"Reservation", component: ReservationComponent},
{path:"login", component: LoginComponent},
{path:"register", component: RegisterComponent},
{path:"responsable", component: IntResponsableComponent},
{path:"receptionniste", component: IntReceptionnisteComponent},
{path:"client", component: IntClientComponent},
{path:"employe", component: IntEmployeComponent},
{path:"admin", component: IntAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule {
static components = [
];
}
