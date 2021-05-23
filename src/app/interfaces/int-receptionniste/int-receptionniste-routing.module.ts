import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientsComponent } from './gclients/add-clients/add-clients.component';
import { AddReservationComponent } from './greservations/add-reservation/add-reservation.component';
import { GClientsComponent } from './gclients/gclients.component';
import { GReservationsComponent } from './greservations/greservations.component';
import { UpdateClientComponent } from './gclients/update-client/update-client.component';
import { UpdateReservationComponent } from './greservations/update-reservation/update-reservation.component';
import { ReservationComponent } from 'src/app/front/reservation/reservation.component';

const routes: Routes = [
  {path:"listeclients", component: GClientsComponent},
  {path:"listereservations", component: GReservationsComponent},
  {path:"addreservation", component: AddReservationComponent},
  {path: 'updatereservation/:id', component: UpdateReservationComponent},
  {path:"reservation", component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntReceptionnisteRoutingModule { }
