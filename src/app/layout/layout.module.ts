import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SortableComponent } from './components/sortable/sortable.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    SortableComponent,
  ]
})
export class LayoutModule { }
