import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smooth-dnd',
  templateUrl: './smooth-dnd.component.html',
  styleUrls: ['./smooth-dnd.component.scss']
})
export class SmoothDndComponent implements OnInit {

  scene = {
    children: [
      // tslint:disable-next-line:max-line-length
      { id: 1, title: 'Backlogs', children: [{ id: 11, title: 'Item 1' }, { id: 12, title: 'Item 2' }, { id: 13, title: 'Item 3' }, { id: 14, title: 'Item 4' }] },
      { id: 2, title: 'To do', children: [{ id: 21, title: 'Item 21' }, { id: 22, title: 'Item 22' }] },
      { id: 3, title: 'In Progress', children: [] },
      { id: 4, title: 'Done', children: [] },
      { id: 5, title: 'Deployment', children: [] }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  generateItems(count, creator) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(creator(i));
    }
    return result;
  }


  onColumnDrop(dropResult: any) {
    const scene = Object.assign({}, this.scene);
    scene.children = this.applyDrag(scene.children, dropResult);
    this.scene = scene;
  }

  applyDrag(arr, dragResult) {
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
