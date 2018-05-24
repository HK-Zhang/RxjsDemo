import "rxjs/add/observable/interval";
import "rxjs/add/operator/bufferWhen";
import { Observable } from "rxjs/Observable";

export class BufferWhenPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit value every 1 second
        const oneSecondInterval = Observable.interval(1000);
        // return an observable that emits value every 5 seconds
        const fiveSecondInterval = () => Observable.interval(5000);
        // every five seconds, emit buffered values
        const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);
        // log values
        // ex. output: [0,1,2,3]...[4,5,6,7,8]
        const subscribe = bufferWhenExample.subscribe((val) =>
            console.log("Emitted Buffer: ", val),
        );
    }

}
