import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntResponsableRoutingModule } from './int-responsable-routing.module';
import { IntResponsableComponent } from './int-responsable.component';
import { GChambresComponent } from './gchambres/gchambres.component';
import { AddChambresComponent } from './gchambres/add-chambres/add-chambres.component';
import { UpdateChambresComponent } from './gchambres/update-chambres/update-chambres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GplanningsComponent } from './gplannings/gplannings.component';
import { AddplanningsComponent } from './gplannings/addplannings/addplannings.component';
import { UpdateplanningsComponent } from './gplannings/updateplannings/updateplannings.component';
import { GcommentaireComponent } from './gcommentaire/gcommentaire.component';
import { GreclamationComponent } from './greclamation/greclamation.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DeleteplanningsComponent } from './gplannings/deleteplannings/deleteplannings.component';
@NgModule({
  declarations: [
    IntResponsableComponent,
    GChambresComponent,
    AddChambresComponent,
    UpdateChambresComponent,
    GplanningsComponent,
    AddplanningsComponent,
    UpdateplanningsComponent,
    GcommentaireComponent,
    GreclamationComponent,
    DeleteplanningsComponent
  ],

  imports: [
    CommonModule,
    IntResponsableRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class IntResponsableModule {

 }
