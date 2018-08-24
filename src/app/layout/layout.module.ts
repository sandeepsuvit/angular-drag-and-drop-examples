import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DragulaComponent } from './components/dragula/dragula.component';
import { SmoothDndComponent } from './components/smooth-dnd/smooth-dnd.component';
import { TodoComponent } from './components/dragula/todo/todo.component';
import { ItemComponent } from './components/dragula/item/item.component';
import { ColumnComponent } from './components/smooth-dnd/column/column.component';
import { CardComponent } from './components/smooth-dnd/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [
    HomeComponent,
    LayoutComponent,
    DragulaComponent,
    TodoComponent,
    ItemComponent,
    SmoothDndComponent,
    ColumnComponent,
    CardComponent
  ]
})
export class LayoutModule { }
