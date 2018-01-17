import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/merge';



export class partitionPoc {

    test() {
        //this.func1();
        this.func2();
    }

    func1() {
        const source = Observable.from([1, 2, 3, 4, 5, 6]);
        //first value is true, second false
        const [evens, odds] = source.partition(val => val % 2 === 0);
        /*
          Output:
          "Even: 2"
          "Even: 4"
          "Even: 6"
          "Odd: 1"
          "Odd: 3"
          "Odd: 5"
        */
        const subscribe = Observable.merge(
            evens.map(val => `Even: ${val}`),
            odds.map(val => `Odd: ${val}`)
        ).subscribe(val => console.log(val));
    }

    func2() {
        const source = Observable.from([1, 2, 3, 4, 5, 6]);
        //if greater than 3 throw
        const example = source
            .map(val => {
                if (val > 3) {
                    throw `${val} greater than 3!`;
                }
                return { success: val };
            })
            .catch(val => Observable.of({ error: val }));
        //split on success or error
        const [success, error] = example.partition((res:any) => res.success);
        /*
          Output:
          "Success! 1"
          "Success! 2"
          "Success! 3"
          "Error! 4 greater than 3!"
        */
        const subscribe = Observable.merge(
            success.map(val => `Success! ${val.success}`),
            error.map(val => `Error! ${val.error}`)
        ).subscribe(val => console.log(val));
    }

}