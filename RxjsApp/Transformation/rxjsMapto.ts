﻿import "rxjs/add/observable/interval";
import "rxjs/add/operator/mapTo";
import { Observable } from "rxjs/Observable";

export class MaptoPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit value every two seconds
        const source = Observable.interval(2000);
        // map all emissions to one value
        const example = source.mapTo("HELLO WORLD!");
        // output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        //// emit every click on document
        // const source = Observable.fromEvent(document, 'click');
        //// map all emissions to one value
        // const example = source.mapTo('GOODBYE WORLD!');
        //// output: (click)'GOODBYE WORLD!'...
        // const subscribe = example.subscribe(val => console.log(val));
    }

}
