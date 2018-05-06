import "rxjs/add/observable/forkJoin";
import { Observable } from "rxjs";

export class ForkJoinPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const getPostOne$ = Observable.timer(1000).mapTo({ id: 1 });
        const getPostTwo$ = Observable.timer(2000).mapTo({ id: 2 });

        Observable.forkJoin(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }

}
