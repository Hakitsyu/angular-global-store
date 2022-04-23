import { BehaviorSubject, Observable } from "rxjs";

export class Store<T> {
    private _observable!: Observable<T>;
    private _subject!: BehaviorSubject<T>;
    
    constructor(initialValue: T) {
        this._subject = new BehaviorSubject(initialValue);
        this._observable = this._subject.asObservable();
    }

    set(object: T) {
        this._subject.next(object);
    }

    get(): T | undefined {
        return this.subject.getValue();
    }

    get subject() {
        return this._subject;
    }

    get observabler() {
        return this._observable;
    }
}