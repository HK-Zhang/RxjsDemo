"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AsyncSubject_1 = require("rxjs/AsyncSubject");
class AsyncSubjectPoc {
    test() {
        this.func1();
    }
    func1() {
        const sub = new AsyncSubject_1.AsyncSubject();
        let i = 0;
        const handle = setInterval(() => {
            sub.next(i);
            if (++i > 3) {
                sub.complete();
                clearInterval(handle);
            }
        }, 500);
        const subscription = sub.subscribe((t) => { console.log("Next:" + t); }, (err) => { console.log("Error:" + err); }, () => { console.log("complete."); });
    }
}
exports.AsyncSubjectPoc = AsyncSubjectPoc;
//# sourceMappingURL=RxjsAsyncSubject.js.map