import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { DragulaModule } from 'ng2-dragula';
import { CommonUtilsService } from './services/common-utils.service';
import { AutosizeModule } from 'ngx-autosize';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    NgxDnDModule,
    NgxSmoothDnDModule,
    DragulaModule.forRoot(),
    AutosizeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    RouterModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    CarouselModule,
    NgxDnDModule,
    NgxSmoothDnDModule,
    DragulaModule,
    AutosizeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonUtilsService,
    DataService
  ]
})
export class CoreModule { }
