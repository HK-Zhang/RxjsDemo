import "rxjs/add/observable/of";
import "rxjs/add/operator/concatMap";
import { Observable } from "rxjs";

export class ConcatMapPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit 'Hello' and 'Goodbye'
        const source = Observable.of("Hello", "Goodbye");
        // map value from source into inner observable, when complete emit result and move to next
        const example = source.concatMap((val) => Observable.of(`${val} World!`));
        // output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        const subscribe = example.subscribe((val) => console.log("Example One:", val));
    }

    public func2() {
        const concatMapSub = Observable.of(2000, 1000)
            .concatMap((v) => Observable.of(v).delay(v))
            // concatMap: 2000, concatMap: 1000
            .subscribe((v) => console.log("concatMap:", v));

        const mergeMapSub = Observable.of(2000, 1000)
            .mergeMap((v) => Observable.of(v).delay(v))
            // mergeMap: 1000, mergeMap: 2000
            .subscribe((v) => console.log("mergeMap:", v));
    }
}
