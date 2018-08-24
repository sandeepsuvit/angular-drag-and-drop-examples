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
import { CommonUtilsService } from './services/common-utils.service';

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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonUtilsService
  ]
})
export class CoreModule { }
