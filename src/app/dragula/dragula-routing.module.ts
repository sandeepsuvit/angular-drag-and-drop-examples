import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragulaComponent } from './dragula.component';

const routes: Routes = [
  { path: '', component: DragulaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragulaRoutingModule { }
