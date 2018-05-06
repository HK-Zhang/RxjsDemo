import "rxjs/add/observable/of";
import { Observable } from "rxjs";

const tfx = (item, index) => {
    return item * 2;
};

export class OfPoc {
    public test() {
        this.func1();
        // this.func3();
    }

    public func1() {
        // emits any number of provided values in sequence
        let source = Observable.of(1, 2, 3, 4, 5);
        // output: 1,2,3,4,5
        const subscribe = source.subscribe((val) => console.log(val));

        source = Observable.of(6, 7);
    }

    public func2() {
        const source = Observable.of(1, 2, 3);

        const target = source.map(tfx);

        target.subscribe((x) => console.log(x));
    }

    public func3() {
        // emits values of any type
        const source = Observable.of<any>({ name: "Brian" }, [1, 2, 3], function hello() {
            return "Hello";
        });
        // output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
