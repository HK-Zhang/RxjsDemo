import "rxjs/add/operator/pairwise";
import { Observable } from "rxjs/Observable";

export class PairwisePoc {
    public test() {
        this.func1();
    }

    public func1() {
        Observable.interval(1000)
            .pairwise()
            .subscribe((pair) => console.log(pair)); // pair[1] - pair[0]
    }

}
