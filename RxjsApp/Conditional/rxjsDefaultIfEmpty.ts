import "rxjs/add/observable/of";
import "rxjs/add/operator/defaultIfEmpty";
import { Observable } from "rxjs";

export class DefaultIfEmptyPoc {
    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        const empty = Observable.of();
        // emit 'Observable.of() Empty!' when empty, else any values from source
        const exampleOne = empty.defaultIfEmpty("Observable.of() Empty!");
        // output: 'Observable.of() Empty!'
        const subscribe = exampleOne.subscribe((val) => console.log(val));
    }

    public func2() {
        // empty observable
        const empty = Observable.empty();
        // emit 'Observable.empty()!' when empty, else any values from source
        const example = empty.defaultIfEmpty("Observable.empty()!");
        // output: 'Observable.empty()!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
