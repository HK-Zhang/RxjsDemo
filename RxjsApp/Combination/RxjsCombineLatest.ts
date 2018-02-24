import "rxjs/add/observable/combineLatest";
import { Observable } from "rxjs/Observable";

export class CombineLatestPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const intervalOne$ = Observable.interval(1000);
        const intervalTwo$ = Observable.interval(2000);

        Observable.combineLatest(
            intervalOne$,
            intervalTwo$,
        ).subscribe((all) => console.log(all));
    }

}
