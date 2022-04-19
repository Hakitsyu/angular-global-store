import { NumbersStore } from './../store/numbers.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {
  numbers: number[] = [];

  constructor(private numbersStore: NumbersStore) {
    this.watchNumbersUpdate();
  }

  ngOnInit(): void {}

  watchNumbersUpdate() {
    this.numbersStore.observabler.subscribe(numbers => this.numbers = numbers);
  }
}
