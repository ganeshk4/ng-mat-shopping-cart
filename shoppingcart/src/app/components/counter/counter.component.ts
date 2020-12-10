import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() countChanged = new EventEmitter();
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  decrement() {
    if (this.count === 0) return;
    --this.count;
    this.countChanged.emit(this.count);
  }

  increment() {
    ++this.count;
    this.countChanged.emit(this.count);
  }
}
