import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddusersComponent } from './gusers/addusers/addusers.component';
import { GusersComponent } from './gusers/gusers.component';
import { UpdateusersComponent } from './gusers/updateusers/updateusers.component';

const routes: Routes = [
  {path:"add-user", component: AddusersComponent},
  {path:"users", component: GusersComponent},
  {path:"updateUser/:id", component: UpdateusersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntAdminRoutingModule { }
