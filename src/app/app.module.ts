import { authInterceptorProviders } from './_service/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule } from '@angular/router';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { IntResponsableRoutingModule } from './interfaces/int-responsable/int-responsable-routing.module';





@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ModalModule,
  



  ],
  providers: [authInterceptorProviders,BsModalService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
