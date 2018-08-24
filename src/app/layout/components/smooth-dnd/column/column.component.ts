import { Component, Input, OnInit } from '@angular/core';
import { CommonUtilsService } from './../../../../core/services/common-utils.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column;
  @Input() scene;

  constructor(
    private commonUtilsService: CommonUtilsService
  ) { }

  ngOnInit() {
  }

  /**
   * Function called after card drop
   *
   * @param {*} columnId
   * @param {*} dropResult
   * @memberof ColumnComponent
   */
  onCardDrop(columnId: any, dropResult: any) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.scene);
      const column = scene.children.filter(p => p.id === columnId)[0];
      const columnIndex = scene.children.indexOf(column);

      const newColumn = Object.assign({}, column);
      newColumn.children = this.commonUtilsService.applyDrag(newColumn.children, dropResult);
      scene.children.splice(columnIndex, 1, newColumn);

      this.scene = scene;
    }
  }

  /**
   * Function called when card dragged
   *
   * @param {*} columnId
   * @returns
   * @memberof ColumnComponent
   */
  getCardPayload(columnId: any) {
    return (index) => {
      return this.scene.children.filter(p => p.id === columnId)[0].children[index];
    };
  }

  /**
   * Function to log all events fired
   *
   * @param {*} params
   * @memberof ColumnComponent
   */
  log(...params) {
    console.log(...params);
  }
}
