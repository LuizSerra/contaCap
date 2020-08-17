import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaControlesComponent } from './conta-controles/conta-controles.component';

const routes: Routes = [
  { path: '', component: ContaControlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
