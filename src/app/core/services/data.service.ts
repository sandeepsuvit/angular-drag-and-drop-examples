import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';

@Injectable()
export class DataService {

  constructor() { }

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
}
