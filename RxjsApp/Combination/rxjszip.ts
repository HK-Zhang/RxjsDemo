import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { zip } from 'rxjs/observable/zip';
import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators';
// import { pipe } from 'rxjs/util/pipe';

export class zipPoc {

    test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }

    func1() {
        const sourceOne = of('Hello');
        const sourceTwo = of('World!');
        const sourceThree = of('Goodbye');
        const sourceFour = of('World!');
        //wait until all observables have emitted a value then emit all as an array
        const example = zip(
            sourceOne,
            sourceTwo.pipe(delay(1000)),
            sourceThree.pipe(delay(2000)),
            sourceFour.pipe(delay(3000))
        );
        //output: ["Hello", "World!", "Goodbye", "World!"]
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {

        //emit every 1s
        const interval = Observable.interval(1000);
        //when one observable completes no more values will be emitted
        const example = zip(interval, interval.pipe(take(2)));
        //output: [0,0]...[1,1]
        const subscribe = example.subscribe(val => console.log(val));
    }

    func3(){
        const source = Observable.of("src");
        const example = source.zip(Observable.range(1,4));
        const subscribe = example.subscribe(val => console.log(val));
    }

    func4(){
        const source = Observable.interval(1000);
        const example = source.zip(Observable.range(1,4));
        const subscribe = example.subscribe(val => console.log(val));
    }

}