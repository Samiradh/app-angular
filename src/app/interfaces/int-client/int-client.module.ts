import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntClientRoutingModule } from './int-client-routing.module';
import { IntClientComponent } from './int-client.component';
import { DemandeServiceComponent } from './demande-service/demande-service.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
      IntClientComponent,
     DemandeServiceComponent,
     CommentaireComponent,
     ReclamationComponent
    ],


  imports: [
    CommonModule,
    IntClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]

})
export class IntClientModule {

 }
