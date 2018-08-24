import { CommonUtilsService } from './../../../core/services/common-utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smooth-dnd',
  templateUrl: './smooth-dnd.component.html',
  styleUrls: ['./smooth-dnd.component.scss']
})
export class SmoothDndComponent implements OnInit {
  scene: any;

  constructor(
    private commonUtilsService: CommonUtilsService
  ) { }

  ngOnInit() {
    this.scene = this.commonUtilsService.getSmoothScrollData();
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
