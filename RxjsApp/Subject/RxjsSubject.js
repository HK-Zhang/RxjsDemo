"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class SubjectPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        const sub = new rxjs_1.Subject();
        sub.next(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }
    /**
     * func2
     */
    func2() {
        const sub = new rxjs_1.Subject();
        const subscription = sub.subscribe((t) => { console.log("Next:" + t); }, (err) => { console.log("Error:" + err); }, () => { console.log("complete."); });
        sub.next(42);
        sub.next(56);
        sub.complete();
    }
}
exports.SubjectPoc = SubjectPoc;
//# sourceMappingURL=RxjsSubject.js.map