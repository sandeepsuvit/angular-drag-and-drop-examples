import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Board } from '../models/board.model';
import { CommonUtilsService } from './common-utils.service';

@Injectable()
export class DataService {

  constructor(
    private commonUtilsService: CommonUtilsService
  ) {}

  /**
   * Function to update dragula column order
   *
   * @param {Board} board
   * @returns
   * @memberof DataService
   */
  updateDragulaColumnOrder(request: any): Array<Board> {
    return request.columns;
  }

  /**
   * Function to update dragula card order
   *
   * @param {Board} board
   * @returns
   * @memberof DataService
   */
  updateDragulaCardOrder(board: Board) {
    return board;
  }

  /**
   * generate sample data for dragula scroll
   *
   * @returns
   * @memberof DataService
   */
  getDragulaData(): Array<Board> {
    return [
      // tslint:disable-next-line:max-line-length
      { id: uuid(), order: 1000, title: 'Backlogs', todos: this.commonUtilsService.generateItems(20, i => ({ id: uuid(), order: i * 1000, title: `Backlogs - ${i}` })) },
      // tslint:disable-next-line:max-line-length
      { id: uuid(), order: 2000, title: 'To Do', todos: this.commonUtilsService.generateItems(5, i => ({ id: uuid(), order: i * 1000, title: `To Do - ${i}` })) },
      // tslint:disable-next-line:max-line-length
      { id: uuid(), order: 3000, title: 'In Progress', todos: this.commonUtilsService.generateItems(2, i => ({ id: uuid(), order: i * 1000, title: `In Progress - ${i}` })) },
      // tslint:disable-next-line:max-line-length
      { id: uuid(), order: 4000, title: 'Review', todos: this.commonUtilsService.generateItems(6, i => ({ id: uuid(), order: i * 1000, title: `Review - ${i}` })) },
      // tslint:disable-next-line:max-line-length
      { id: uuid(), order: 5000, title: 'Done', todos: this.commonUtilsService.generateItems(8, i => ({ id: uuid(), order: i * 1000, title: `Done - ${i}` })) },
      // tslint:disable-next-line:max-line-length
      { id: uuid(), order: 6000, title: 'Deploy', todos: this.commonUtilsService.generateItems(1, i => ({ id: uuid(), order: i * 1000, title: `Deploy - ${i}` })) }
    ];
  }

  /**
   * Get data for smooth scroll
   *
   * @returns
   * @memberof DataService
   */
  getSmoothScrollData() {
    return {
      children: [
        // tslint:disable-next-line:max-line-length
        { id: uuid(), title: 'Backlogs', children: this.commonUtilsService.generateItems(20, i => ({ id: uuid(), title: `Backlogs - ${i}` })) },
        // tslint:disable-next-line:max-line-length
        { id: uuid(), title: 'To do', children: this.commonUtilsService.generateItems(10, i => ({ id: uuid(), title: `To do - ${i}` })) },
        // tslint:disable-next-line:max-line-length
        { id: uuid(), title: 'In Progress', children: this.commonUtilsService.generateItems(2, i => ({ id: uuid(), title: `In Progress - ${i}` })) },
        // tslint:disable-next-line:max-line-length
        { id: uuid(), title: 'Done', children: this.commonUtilsService.generateItems(12, i => ({ id: uuid(), title: `Done - ${i}` })) },
        // tslint:disable-next-line:max-line-length
        { id: uuid(), title: 'Deployment', children: [] }
      ]
    };
  }
}
