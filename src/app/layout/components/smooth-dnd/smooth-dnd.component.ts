import { CommonUtilsService } from './../../../core/services/common-utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smooth-dnd',
  templateUrl: './smooth-dnd.component.html',
  styleUrls: ['./smooth-dnd.component.scss']
})
export class SmoothDndComponent implements OnInit {
  scene: any;
  columns: Array<any> = [];

  constructor(
    private commonUtilsService: CommonUtilsService
  ) { }

  ngOnInit() {
    this.scene = {
      children: [
        { id: 1, title: 'Backlogs', children: this.commonUtilsService.generateItems(20, i => ({ id: i, title: 'Backlogs - ' + i })) },
        { id: 2, title: 'To do', children: this.commonUtilsService.generateItems(10, i => ({ id: i, title: 'To do - ' + i })) },
        { id: 3, title: 'In Progress', children: this.commonUtilsService.generateItems(2, i => ({ id: i, title: 'In Progress - ' + i })) },
        { id: 4, title: 'Done', children: this.commonUtilsService.generateItems(12, i => ({ id: i, title: 'Done - ' + i })) },
        { id: 5, title: 'Deployment', children: [] }
      ]
    };
  }

  /**
   * Function called after column drop
   *
   * @param {*} dropResult
   * @memberof SmoothDndComponent
   */
  onColumnDrop(dropResult: any) {
    const scene = Object.assign({}, this.scene);
    scene.children = this.commonUtilsService.applyDrag(scene.children, dropResult);
    this.scene = scene;
  }

}
