import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaComponent } from './components/dragula/dragula.component';
import { SmoothDndComponent } from './components/smooth-dnd/smooth-dnd.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'smooth-dnd', component: SmoothDndComponent },
      { path: 'dragula', component: DragulaComponent },
      { path: '', redirectTo: 'smooth-dnd', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
