import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalComponent } from './canal/canal.component';
import { ContenuComponent } from './contenu/contenu.component';
import { PersonneComponent } from './personne/personne.component';

const routes: Routes = [
  {path:"canal", component:CanalComponent},
  {path:"contenu", component:ContenuComponent},
  {path:"personne", component:PersonneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
