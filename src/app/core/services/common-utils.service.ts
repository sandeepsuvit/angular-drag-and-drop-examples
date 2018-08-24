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
}
