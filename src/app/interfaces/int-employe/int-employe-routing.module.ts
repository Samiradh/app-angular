import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GservicesComponent } from './gservices/gservices.component';

const routes: Routes = [
  {path: 'services', component: GservicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntEmployeRoutingModule {
  static components = [
  ];
 }
