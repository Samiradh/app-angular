import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { DemandeServiceComponent } from './demande-service/demande-service.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  {path:"addservice", component: DemandeServiceComponent},
  {path:"addcommentaire", component: CommentaireComponent},
  {path:"addreclamation", component: ReclamationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntClientRoutingModule { }
