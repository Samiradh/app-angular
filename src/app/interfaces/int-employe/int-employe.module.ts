import { IntEmployeComponent } from './int-employe.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntEmployeRoutingModule } from './int-employe-routing.module';
import { GservicesComponent } from './gservices/gservices.component';
import { AddservicesComponent } from './gservices/addservices/addservices.component';
import { UpdateservicesComponent } from './gservices/updateservices/updateservices.component';
import { DeleteserivcesComponent } from './gservices/deleteserivces/deleteserivces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    IntEmployeComponent,
      GservicesComponent,
     AddservicesComponent,
      UpdateservicesComponent,
      DeleteserivcesComponent
  ],
  imports: [
    CommonModule,
    IntEmployeRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [BsModalService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class IntEmployeModule { }
