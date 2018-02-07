import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/empty";
import { Subscription } from "rxjs/Subscription";

export class EmptyPoc {
    test():void {
        this.func1();
        // this.func2();
    }

    func1():void {
        // create observable that immediately completes
        const example: Observable<{}> = Observable.empty();
        // output: 'Complete!'
        const subscribe: Subscription = example.subscribe({
            next: () => console.log("Next"),
            complete: () => console.log("Complete!")
        });
    }
}