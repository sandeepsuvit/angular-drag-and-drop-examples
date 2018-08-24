import { CommonUtilsService } from './../../../core/services/common-utils.service';
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';
import { Board } from '../../../core/models/board.model';

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

  board: Array<Board> = [];

  // All elements
  columns: any;
  cards: any;

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

  ngOnInit() {
    this.board = this.commonUtilsService.getDragulaData();
  }

  ngAfterViewInit() {
    setTimeout(() => { this.initializeScroll(); }, 500);
  }

  ngOnDestroy() {
    // Required to remove any autoscroll items else will drop frames
    if (this.scollElemnts) {
      this.scollElemnts.destroy(true);
    }
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
    this.dragulaService.destroy('COLUMNS');
  }

  /**
   * Function to initalize scroll on the elements
   *
   * @memberof BoardDetailsComponent
   */
  initializeScroll() {
    this.columns = Array.from(this.elRef.nativeElement.querySelectorAll('.columns'));
    this.cards = Array.from(this.elRef.nativeElement.querySelectorAll('.cards'));
    // Enable autoscrolling
    this.scollElemnts = autoScroll([...this.columns, ...this.cards], {
      margin: 100,
      maxSpeed: 30,
      scrollWhenOutside: false,
      autoScroll: function () {
        // Only scroll when the pointer is down
        return this.down;
      }
    });
  }

  /**
   * Function to reinitialize the scrolling
   *
   * @memberof DragulaComponent
   */
  private resetScroll() {
    // Remove all old elements
    [...this.columns, ...this.cards].forEach(el => this.scollElemnts.remove(el));
    // Get all new columns
    this.columns = Array.from(this.elRef.nativeElement.querySelectorAll('.columns'));
    // Get all new cards
    this.cards = Array.from(this.elRef.nativeElement.querySelectorAll('.cards'));
    // Re-attach new elements
    [...this.columns, ...this.cards].forEach(el => this.scollElemnts.add(el));
  }

  /**
   * Event handler when a new card is added
   *
   * @param {*} event
   * @memberof DragulaComponent
   */
  onAddCardEvent(event: any) {
    console.log(event);
    const columnIdx = this.board.findIndex(column => column.id === event.column);
    this.board[columnIdx].todos.push(event);
    this.resetScroll();
  }

  /**
   * Event handler when column title is updated
   *
   * @param {*} event
   * @memberof DragulaComponent
   */
  onEditColumnTitleEvent(event: any) {
    console.log(event);
    const columnIdx = this.board.findIndex(column => column.id === event.column);
    this.board[columnIdx].title = event.title;
    this.resetScroll();
  }
}
