import { Injectable } from '@angular/core';
import { Store } from './../../../lib/store';

@Injectable({
    providedIn: 'root'
})
export class NumbersStore extends Store<number[]> {}