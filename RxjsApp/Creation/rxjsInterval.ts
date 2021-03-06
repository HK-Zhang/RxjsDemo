﻿import "rxjs/add/observable/interval";
import { Observable } from "rxjs/Observable";

export class IntervalPoc {
    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // emit value in sequence every 1 second
        const source = Observable.interval(1000);
        // output: 0,1,2,3,4,5....
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
