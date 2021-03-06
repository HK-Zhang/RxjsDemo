﻿import "rxjs/add/observable/interval";
import "rxjs/add/operator/bufferToggle";
import { Observable } from "rxjs/Observable";


export class BufferTogglePoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit value every second
        const sourceInterval = Observable.interval(1000);
        // start first buffer after 5s, and every 5s after
        const startInterval = Observable.interval(5000);
        // emit value after 3s, closing corresponding buffer
        const closingInterval = (val) => {
            console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
            return Observable.interval(3000);
        };
        // every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
        const bufferToggleInterval = sourceInterval.bufferToggle(
            startInterval,
            closingInterval,
        );
        // log to console
        // ex. emitted buffers [4,5,6]...[9,10,11]
        const subscribe = bufferToggleInterval.subscribe((val) =>
            console.log("Emitted Buffer:", val),
        );
    }

}
