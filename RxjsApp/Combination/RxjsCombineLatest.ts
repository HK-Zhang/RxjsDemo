var Rx = require('rxjs/Rx');

export class CombineLatestPoc {
    test() {
        this.func1();
    }

    func1() {
        const intervalOne$ = Rx.Observable.interval(1000);
        const intervalTwo$ = Rx.Observable.interval(2000);

        Rx.Observable.combineLatest(
            intervalOne$,
            intervalTwo$
        ).subscribe(all => console.log(all));
    }

}