import { NumbersStore } from './../store/numbers.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {
  constructor(private numbersStore: NumbersStore) {
  }

  ngOnInit(): void {}

  get numbers(): number[] {
    return this.numbersStore.get()!;
  }
}
