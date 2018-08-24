import { Board } from './../models/board.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonUtilsService {

  constructor() { }

  /**
   * Function to generate random items
   *
   * @param {*} count
   * @param {*} creator
   * @returns
   * @memberof CommonUtilsService
   */
  generateItems(count: any, creator: any) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(creator(i));
    }
    return result;
  }

  /**
   * Function to modify the data upon drag
   *
   * @param {*} arr
   * @param {*} dragResult
   * @returns
   * @memberof CommonUtilsService
   */
  applyDrag(arr: any, dragResult: any) {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) {
      return arr;
    }

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
  }

  /**
   * generate sample data for dragula scroll
   *
   * @returns
   * @memberof CommonUtilsService
   */
  getDragulaData(): Array<Board> {
    return [
      { id: 1, title: 'Backlogs', todos: this.generateItems(20, i => ({ id: i, title: 'Backlogs - ' + i })) },
      { id: 2, title: 'To Do', todos: this.generateItems(5, i => ({ id: i, title: 'To Do - ' + i })) },
      { id: 3, title: 'In Progress', todos: this.generateItems(2, i => ({ id: i, title: 'In Progress - ' + i })) },
      { id: 4, title: 'Review', todos: this.generateItems(6, i => ({ id: i, title: 'Review - ' + i })) },
      { id: 5, title: 'Done', todos: this.generateItems(8, i => ({ id: i, title: 'Done - ' + i })) },
      { id: 6, title: 'Deploy', todos: this.generateItems(1, i => ({ id: i, title: 'Deploy - ' + i })) }
    ];
  }

  /**
   * Get data for smooth scroll
   *
   * @returns
   * @memberof CommonUtilsService
   */
  getSmoothScrollData() {
    return {
      children: [
        { id: 1, title: 'Backlogs', children: this.generateItems(20, i => ({ id: i, title: 'Backlogs - ' + i })) },
        { id: 2, title: 'To do', children: this.generateItems(10, i => ({ id: i, title: 'To do - ' + i })) },
        { id: 3, title: 'In Progress', children: this.generateItems(2, i => ({ id: i, title: 'In Progress - ' + i })) },
        { id: 4, title: 'Done', children: this.generateItems(12, i => ({ id: i, title: 'Done - ' + i })) },
        { id: 5, title: 'Deployment', children: [] }
      ]
    };
  }
}
