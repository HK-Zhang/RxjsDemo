import "rxjs/add/observable/interval";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

export class RetryPoc {
    public test() {
        this.func1();
    }

    public func1() {
        // emit value every 1s
        const source = Observable.interval(1000);
        const example = source
            .switchMap((val) => {
                // throw error for demonstration
                if (val > 5) {
                    return Observable.throw("Error!");
                }
                return Observable.of(val);
            })
            // retry 2 times on error
            .retry(2);
        /*
          output:
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          "Error!: Retried 2 times then quit!"
        */
        const subscribe = example.subscribe({
            error: (val) => console.log(`${val}: Retried 2 times then quit!`),
            next: (val) => console.log(val),
        });
    }

}
