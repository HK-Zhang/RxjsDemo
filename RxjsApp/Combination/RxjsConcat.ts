import "rxjs/add/observable/concat";
import { Observable } from "rxjs/Observable";

export class ConcatPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const getPostOne$ = Observable.timer(3000).mapTo({ id: 1 });
        const getPostTwo$ = Observable.timer(1000).mapTo({ id: 2 });

        Observable.concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }

}
