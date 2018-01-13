import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/every';
import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/timer';

export class EveryPoc {
    test() {
        //this.func1();
        this.func2();
    }

    func1() {
        //emit 5 values
        const source = Observable.of(1, 2, 3, 4, 5);
        const example = source
            //is every value even?
            .every(val => val % 2 === 0);
        //output: false
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        //emit 5 values
        const allEvens = Observable.of(2, 4, 6, 8, 10);
        const example = allEvens
            //is every value even?
            .every(val => val % 2 === 0);
        //output: true
        const subscribe = example.subscribe(val => console.log(val));
    }
}