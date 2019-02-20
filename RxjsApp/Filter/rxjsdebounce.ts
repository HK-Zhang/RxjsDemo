import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/timer';
import 'rxjs/add/Observable/interval';
import 'rxjs/add/operator/debounce'


export class debouncePoc {

    test() {
        // this.func1();
        this.func2();
    }

    func1() {
        //emit four strings
        const example = Observable.of('WAIT', 'ONE', 'SECOND', 'Last will display');
        /*
            Only emit values after a second has passed between the last emission, 
            throw away all other values
        */
        const debouncedExample = example.debounce(() => Observable.timer(1000));
        /*
            In this example, all values but the last will be omitted
            output: 'Last will display'
        */
        const subscribe = debouncedExample.subscribe(val => console.log(val));
    }

    func2() {
        //emit value every 1 second, ex. 0...1...2
        const interval = Observable.interval(1000);
        //raise the debounce time by 200ms each second
        const debouncedInterval = interval.debounce(val =>
            Observable.timer(val * 200)
        );
        /*
          After 5 seconds, debounce time will be greater than interval time,
          all future values will be thrown away
          output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
        */
        const subscribe = debouncedInterval.subscribe(val =>
            console.log(`Example Two: ${val}`)
        );
    }

}