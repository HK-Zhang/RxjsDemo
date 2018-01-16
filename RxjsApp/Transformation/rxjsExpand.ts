import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/expand';
import 'rxjs/add/observable/of';


export class expandPoc {

    test() {
        this.func1();
    }

    func1() {
        //emit 2
        const source = Observable.of(2);
        const example = source
            //recursively call supplied function
            .expand(val => {
                //2,3,4,5,6
                console.log(`Passed value: ${val}`);
                //3,4,5,6
                return Observable.of(1 + val);
            })
            //call 5 times
            .take(5);
        /*
            "RESULT: 2"
            "Passed value: 2"
            "RESULT: 3"
            "Passed value: 3"
            "RESULT: 4"
            "Passed value: 4"
            "RESULT: 5"
            "Passed value: 5"
            "RESULT: 6"
            "Passed value: 6"
        */
        //output: 2,3,4,5,6
        const subscribe = example.subscribe(val => console.log(`RESULT: ${val}`));
    }

}