import "rxjs/add/observable/of";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/scan";
import { Observable } from "rxjs";



export class ReducePoc {

    public test() {
        this.func1();
    }

    public func1() {
        const source = Observable.of(1, 2, 3, 4);
        const example = source.reduce((acc, val) => acc + val);
        const example2 = source.scan((acc, val) => acc + val);
        // output: Sum: 10'
        const subscribe = example.subscribe((val) => console.log("Sum:", val));
        const subscribe2 = example2.subscribe((val) =>
            console.log("Accumulated total:", val),
        );
    }


}
