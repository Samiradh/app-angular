import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontModule } from './front/front.module';
import { IntAdminModule } from './interfaces/int-admin/int-admin.module';
import { IntClientModule } from './interfaces/int-client/int-client.module';
import { IntEmployeModule } from './interfaces/int-employe/int-employe.module';


import { IntReceptionnisteModule } from './interfaces/int-receptionniste/int-receptionniste.module';
import { IntResponsableModule } from './interfaces/int-responsable/int-responsable.module';

const routes: Routes = [
  { path: 'front', loadChildren: './Front/front.module#FrontModule' },
  {path: 'responsable', loadChildren: './interfaces/int-responsable/int-responsable.module#IntResponsableModule'},
  {path: 'receptionniste', loadChildren: './interfaces/int-receptionniste/int-receptionniste.module#IntReceptionnisteModule'},
  {path: 'client', loadChildren:'./interfaces/int-client/int-client.module#IntClientModule'},
  {path:'employe', loadChildren:'./interfaces/int-employe/module#IntEmployeModule'},
  {path:'admin', loadChildren:'./interfaces/int-admin/int-admin.module#IntAdminModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),FrontModule,IntResponsableModule,IntReceptionnisteModule,IntClientModule,IntEmployeModule,IntAdminModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
