import { BehaviorSubject, Observable, Subscriber } from "rxjs";

export class Store<T> {
    private memory?: T;
    private _observable!: Observable<T>;
    private _subject!: BehaviorSubject<T>;
    
    constructor(initialValue: T) {
        this._subject = new BehaviorSubject(initialValue);
        this._observable = this._subject.asObservable();
    }

    set(object: T) {
        this.memory = object;
        this._subject.next(this.memory);
    }

    get(): T | undefined {
        return this.memory;
    }

    get subject() {
        return this._subject;
    }

    get observabler() {
        return this._observable;
    }
}