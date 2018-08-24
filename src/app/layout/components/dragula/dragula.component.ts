import { CommonUtilsService } from './../../../core/services/common-utils.service';
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

// Used for autoscrolling
const autoScroll = require('dom-autoscroller');
@Component({
  selector: 'app-dragula',
  templateUrl: './dragula.component.html',
  styleUrls: ['./dragula.component.scss']
})
export class DragulaComponent implements OnInit, AfterViewInit, OnDestroy {
  subs = new Subscription();
  scollElemnts: any;

  public groups: Array<any> = [
    {
      id: 1,
      title: 'Backlogs',
      items: this.commonUtilsService.generateItems(10, i => ({ id: i, title: 'Backlogs - ' + i }))
    },
    {
      id: 2,
      title: 'To Do',
      items: this.commonUtilsService.generateItems(5, i => ({ id: i, title: 'To Do - ' + i }))
    },
    {
      id: 3,
      title: 'In Progress',
      items: this.commonUtilsService.generateItems(2, i => ({ id: i, title: 'In Progress - ' + i }))
    },
    {
      id: 4,
      title: 'Review',
      items: this.commonUtilsService.generateItems(6, i => ({ id: i, title: 'Review - ' + i }))
    },
    {
      id: 5,
      title: 'Done',
      items: this.commonUtilsService.generateItems(8, i => ({ id: i, title: 'Done - ' + i }))
    },
    {
      id: 6,
      title: 'Deploy',
      items: this.commonUtilsService.generateItems(1, i => ({ id: i, title: 'Deploy - ' + i }))
    }
  ];

  constructor(
    private dragulaService: DragulaService,
    private elRef: ElementRef,
    private commonUtilsService: CommonUtilsService
  ) {
    this.dragulaService.createGroup('COLUMNS', {
      direction: 'horizontal',
      moves: (el, container, handle) => {
        return handle.classList.contains('group-handle');
      },
      accepts: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        return !el.contains(target); // elements can not be dropped within themselves
      },
    });

    // Dropping columns
    this.subs.add(this.dragulaService.dropModel('COLUMNS')
      .subscribe(({ sourceModel, targetModel, item }) => {
        console.log(sourceModel);
        console.log(targetModel);
        console.log(item);
      })
    );

    // Dropping cards
    this.subs.add(this.dragulaService.dropModel('CARDS')
      .subscribe((args: any) => {
        const { name, el, target, source, sibling, sourceModel, targetModel, item } = args;

        const s_dataset = source['dataset'] as DOMStringMap;
        const t_dataset = target['dataset'] as DOMStringMap;
        console.log(s_dataset.id);
        console.log(t_dataset.id);
      })
    );
  }

  ngOnInit() { }

  ngAfterViewInit() {
    const columns = Array.from(this.elRef.nativeElement.querySelectorAll('.columns'));
    const cards = Array.from(this.elRef.nativeElement.querySelectorAll('.cards'));
    // Enable autoscrolling
    this.scollElemnts = autoScroll([...columns, ...cards], {
      margin: 100,
      maxSpeed: 30,
      scrollWhenOutside: false,
      autoScroll: function () {
        // Only scroll when the pointer is down
        return this.down;
      }
    });
  }

  ngOnDestroy() {
    // Required to remove any autoscroll items else will drop frames
    this.scollElemnts.destroy(true);
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
    this.dragulaService.destroy('COLUMNS');
  }
}
