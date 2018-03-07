"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
const Subject_1 = require("rxjs/Subject");
class SubjectPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        const sub = new Subject_1.Subject();
        sub.next(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }
    func2() {
        const sub = new BehaviorSubject_1.BehaviorSubject(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }
}
exports.SubjectPoc = SubjectPoc;
//# sourceMappingURL=RxjsSubject.js.map