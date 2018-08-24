import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';
import { SmoothDndRoutingModule } from './smooth-dnd-routing.module';
import { SmoothDndComponent } from './smooth-dnd.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    SmoothDndRoutingModule
  ],
  declarations: [
    SmoothDndComponent,
    ColumnComponent,
    CardComponent,
  ]
})
export class SmoothDndModule { }
