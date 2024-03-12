import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudHomeComponent } from './etud-home/etud-home.component';

const routes: Routes = [
  {path : "EtudHome" , component : EtudHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }