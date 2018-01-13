"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/concatMap");
require("rxjs/add/operator/timeout");
require("rxjs/add/operator/catch");
class timeoutPoc {
    test() {
        this.func1();
    }
    makeRequest(timeToDelay) {
        return Observable_1.Observable.of('Request Complete!').delay(timeToDelay);
    }
    func1() {
        Observable_1.Observable.of(4000, 3000, 2000)
            .concatMap(duration => this.makeRequest(duration)
            .timeout(2500)
            .catch(error => Observable_1.Observable.of(`Request timed out after: ${duration}`)))
            .subscribe(val => console.log(val));
    }
}
exports.timeoutPoc = timeoutPoc;
//# sourceMappingURL=rxjsTimeout.js.map