import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntAdminRoutingModule } from './int-admin-routing.module';
import { IntAdminComponent } from './int-admin.component';
import { GusersComponent } from './gusers/gusers.component';
import { AddusersComponent } from './gusers/addusers/addusers.component';
import { UpdateusersComponent } from './gusers/updateusers/updateusers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IntAdminComponent, GusersComponent, AddusersComponent, UpdateusersComponent],
  imports: [
    CommonModule,
    IntAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IntAdminModule { }
