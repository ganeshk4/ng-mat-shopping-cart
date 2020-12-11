import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{
  @Output() countChanged = new EventEmitter();
  count = 1;
  constructor() { }

  /**
   * decrement counter
   */
  decrement() {
    if (this.count === 0) return;
    --this.count;
    this.countChanged.emit(this.count);
  }

  /**
   * increments counter
   */
  increment() {
    ++this.count;
    this.countChanged.emit(this.count);
  }
}
