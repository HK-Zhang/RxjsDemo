import "rxjs/add/observable/interval";
import "rxjs/add/observable/race";
import "rxjs/add/operator/mapTo";
import { Observable } from "rxjs";

export class RacePoc {

    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        // const win = Observable.interval(1000);
        // const fwin = win.mapTo('1s won!');
        // take the first observable to emit
        const example = Observable.race<any>(
            // emit every 1.5s
            Observable.interval(1500),
            // emit every 1s
            Observable.interval(1000).mapTo("1s won!"),
            // emit every 2s
            Observable.interval(2000),
            // emit every 2.5s
            Observable.interval(2500),
        );
        // output: "1s won!"..."1s won!"...etc
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {

        // Throws an error and ignore the rest of the observables.
        const first = Observable.of("first")
            .delay(100)
            .map(() => {
                throw new Error("error");
            });
        const second = Observable.of("second").delay(200);
        const third = Observable.of("third").delay(300);

        const race = Observable.race(first, second, third).subscribe((val) =>
            console.log(val),
        );
    }

}
