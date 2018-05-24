import "rxjs/add/observable/throw";
import { Observable } from "rxjs/Observable";

export class ThrowPoc {
    public test() {
        this.func1();
    }

    public func1() {
        // emits an error with specified value on subscription
        const source = Observable.throw("This is an error!");
        // output: 'Error: This is an error!'
        const subscribe = source.subscribe({
            complete: () => console.log("Complete!"),
            error: (val) => console.log(`Error: ${val}`),
            next: (val) => console.log(val),
        });
    }
}
