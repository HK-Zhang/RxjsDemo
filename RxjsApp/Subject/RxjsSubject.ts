import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";


export class SubjectPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const sub = new Subject();
        sub.next(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }

    public func2() {
        const sub = new BehaviorSubject(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }
}
