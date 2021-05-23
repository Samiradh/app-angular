import { GcommentaireComponent } from './gcommentaire/gcommentaire.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddplanningsComponent } from './gplannings/addplannings/addplannings.component';
import { AddChambresComponent } from './gchambres/add-chambres/add-chambres.component';
import { GChambresComponent } from './gchambres/gchambres.component';
import { UpdateChambresComponent } from './gchambres/update-chambres/update-chambres.component';
import { GplanningsComponent } from './gplannings/gplannings.component';
import { UpdateplanningsComponent } from './gplannings/updateplannings/updateplannings.component';
import { GreclamationComponent } from './greclamation/greclamation.component';

const routes: Routes = [
  {path:"listechambres", component: GChambresComponent},
  {path:"addchambre", component: AddChambresComponent},
  {path: "updatechambre/:id", component: UpdateChambresComponent},
  {path : "plannings" , component: GplanningsComponent},
  {path : "com", component: GcommentaireComponent},
  {path:"recl", component: GreclamationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntResponsableRoutingModule { }
