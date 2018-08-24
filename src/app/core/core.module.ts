import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';

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
  ]
})
export class CoreModule { }
