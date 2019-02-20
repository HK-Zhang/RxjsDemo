import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/single'



export class singlePoc {

    test() {
        this.func1();
        // this.func2();
    }

    func1() {
        //emit (1,2,3,4,5)
        const source = Observable.from([1, 2, 3, 4, 5]);
        //emit one item that matches predicate
        const example = source.single(val => val === 4);
        //output: 4
        const subscribe = example.subscribe(val => console.log(val));
    }
}