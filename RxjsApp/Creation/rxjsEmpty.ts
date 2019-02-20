import "rxjs/add/observable/empty";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

export class EmptyPoc {
    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // create observable that immediately completes
        const example: Observable<{}> = Observable.empty();
        // output: 'Complete!'
        const subscribe: Subscription = example.subscribe({
            complete: () => console.log("Complete!"),
            next: () => console.log("Next"),
        });
    }
}
