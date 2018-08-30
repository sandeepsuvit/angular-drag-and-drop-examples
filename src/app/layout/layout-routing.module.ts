import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaModule } from '../dragula/dragula.module';
import { SmoothDndModule } from '../smooth-dnd/smooth-dnd.module';
import { SortableComponent } from './components/sortable/sortable.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'smooth-dnd', loadChildren: () => SmoothDndModule },
      { path: 'dragula', loadChildren: () => DragulaModule },
      { path: 'sortable', component: SortableComponent },
      { path: '', redirectTo: 'dragula', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
