import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DragulaComponent } from './components/dragula/dragula.component';
import { ItemComponent } from './components/dragula/item/item.component';
import { TodoComponent } from './components/dragula/todo/todo.component';
import { CardComponent } from './components/smooth-dnd/card/card.component';
import { ColumnComponent } from './components/smooth-dnd/column/column.component';
import { SmoothDndComponent } from './components/smooth-dnd/smooth-dnd.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SortableComponent } from './components/sortable/sortable.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    DragulaComponent,
    TodoComponent,
    ItemComponent,
    SmoothDndComponent,
    ColumnComponent,
    CardComponent,
    SortableComponent
  ]
})
export class LayoutModule { }
