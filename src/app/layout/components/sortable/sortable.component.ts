import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from './../../../core/services/common-utils.service';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent implements OnInit {
  items: Array<any>;

  constructor(
    private commonUtilsService: CommonUtilsService
  ) { }

  ngOnInit() {
    this.items = this.commonUtilsService.generateItems(50, i => ({ id: i, data: 'Draggable ' + i }));
  }

  onDrop(dropResult) {
    this.items = this.commonUtilsService.applyDrag(this.items, dropResult);
  }
}
