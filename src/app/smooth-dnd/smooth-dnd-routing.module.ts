import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmoothDndComponent } from './smooth-dnd.component';

const routes: Routes = [
  { path: '', component: SmoothDndComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmoothDndRoutingModule { }
