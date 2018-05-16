"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class TimeoutPoc {
    test() {
        this.func1();
    }
    makeRequest(timeToDelay) {
        return rxjs_1.of("Request Complete!").pipe(operators_1.delay(timeToDelay));
    }
    func1() {
        rxjs_1.of(4000, 3000, 2000).pipe(operators_1.concatMap((duration) => this.makeRequest(duration).pipe(operators_1.timeout(2500), operators_1.catchError((error) => rxjs_1.of(`Request timed out after: ${duration}`)))))
            .subscribe((val) => console.log(val));
    }
}
exports.TimeoutPoc = TimeoutPoc;
//# sourceMappingURL=rxjsTimeout.js.map