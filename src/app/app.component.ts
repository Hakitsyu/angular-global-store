import { NumbersStore } from './store/numbers.store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: number[] = [];

  constructor(private numbersStore: NumbersStore) {
    this.watchNumbersUpdate();
    this.updateNumbers();
  }

  watchNumbersUpdate() {
    this.numbersStore.observabler.subscribe(numbers => this.numbers = numbers);
  }

  updateNumbers() {
    setInterval(() => {
      const arr = !this.numbers 
        ? [this.randomNumber()]
        : [...this.numbers, this.randomNumber()]
  
      this.numbersStore.set(arr);
    }, 500);
  }

  randomNumber() {
    return Math.floor(Math.random() * 9999);
  }
}
