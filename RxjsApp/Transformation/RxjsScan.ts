var Rx = require('rxjs/Rx');

export class ScanPoc {
    test() {
        //this.func1();
        //this.func2();
        this.func3();
    }

    func1() {
        const subject = new Rx.Subject();
        //basic scan example, sum over time starting with zero
        const example = subject.startWith(0).scan((acc, curr) => acc + curr);
        //log accumulated values
        const subscribe = example.subscribe(val =>
            console.log('Accumulated total:', val)
        );
        //next values into subject, adding to the current sum
        subject.next(1); //1
        subject.next(2); //3
        subject.next(3); //6
    }

    func2() {
        // Accumulate values in an array, emit random values from this array.
        const scanObs = Rx.Observable.interval(1000)
            .scan((a, c) => a.concat(c), [])
            .map(r => r[Math.floor(Math.random() * r.length)])
            .distinctUntilChanged()
            .subscribe(console.log);
    }

    func3() {
        const subject = new Rx.Subject();
        //scan example building an object over time
        const example = subject.scan((acc, curr) => Object.assign({}, acc, curr), {});
        //log accumulated values
        const subscribe = example.subscribe(val =>
            console.log('Accumulated object:', val)
        );
        //next values into subject, adding properties to object
        subject.next({ name: 'Joe' }); // {name: 'Joe'}
        subject.next({ age: 30 }); // {name: 'Joe', age: 30}
        subject.next({ favoriteLanguage: 'JavaScript' }); // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    }
}