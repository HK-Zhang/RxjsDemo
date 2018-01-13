import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

export class RangePoc {
    test() {
        this.func1();
        //this.func2();
    }

    func1() {
        //emit 1-10 in sequence
        const source = Observable.range(1, 10);
        //output: 1,2,3,4,5,6,7,8,9,10
        const example = source.subscribe(val => console.log(val));
    }
}