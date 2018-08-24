import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AddCardComponent } from './add-card/add-card.component';
import { DragulaRoutingModule } from './dragula-routing.module';
import { DragulaComponent } from './dragula.component';
import { EditColumnTitleComponent } from './edit-column-title/edit-column-title.component';
import { ItemComponent } from './item/item.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DragulaRoutingModule
  ],
  declarations: [
    DragulaComponent,
    AddCardComponent,
    EditColumnTitleComponent,
    ItemComponent,
    TodoComponent
  ]
})
export class DragulaModule { }
