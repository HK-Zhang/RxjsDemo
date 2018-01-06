var Rx = require('rxjs/Rx');

export class PairwisePoc {
    test() {
        this.func1();
    }

    func1() {
        Rx.Observable.interval(1000)
            .pairwise()
            .subscribe(pair => console.log(pair)); // pair[1] - pair[0]
    }

}