import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntReceptionnisteRoutingModule } from './int-receptionniste-routing.module';
import { IntReceptionnisteComponent } from './int-receptionniste.component';
import { GClientsComponent } from './gclients/gclients.component';
import { AddClientsComponent } from './gclients/add-clients/add-clients.component';
import { UpdateClientComponent } from './gclients/update-client/update-client.component';
import { GReservationsComponent } from './greservations/greservations.component';
import { AddReservationComponent } from './greservations/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './greservations/update-reservation/update-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteclientComponent } from './gclients/deleteclient/deleteclient.component';



@NgModule({
  declarations: [
    IntReceptionnisteComponent,
      GClientsComponent,
      AddClientsComponent,
      UpdateClientComponent,
       GReservationsComponent,
       AddReservationComponent,
       UpdateReservationComponent,
       DeleteclientComponent],

  imports: [
    CommonModule,
    IntReceptionnisteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class IntReceptionnisteModule { }
