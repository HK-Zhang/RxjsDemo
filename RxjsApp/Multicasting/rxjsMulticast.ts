import "rxjs/add/observable/interval";
import "rxjs/add/operator/do";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/multicast";
import "rxjs/add/operator/take";
import { Observable } from "rxjs";
import { Subject } from "rxjs/Subject";

export class MulticastPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit every 2 seconds, take 5
        const source = Observable.interval(2000).take(5);

        const example = source
            // since we are multicasting below, side effects will be executed once
            .do(() => console.log("Side Effect #1"))
            .mapTo("Result!");

        // subscribe subject to source upon connect()
        const multi = example.multicast(() => new Subject());
        /*
          subscribers will share source
          output:
          "Side Effect #1"
          "Result!"
          "Result!"
          ...
        */
        const subscriberOne = multi.subscribe((val) => console.log(val));
        const subscriberTwo = multi.subscribe((val) => console.log(val));
        // subscribe subject to source
        multi.connect();
    }

}
