"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
class fromJsImPoc {
    test() {
        // this.func1();
        this.func3();
    }
    func1() {
        const $obj = immutable_1.fromJS({
            a: 1
        });
        console.log($obj.get('a'));
        const obj = {
            count: 1,
            list: [1, 2, 3, 4, 5]
        };
        var map1 = immutable_1.fromJS(obj);
        var map2 = map1.set('count', 4);
        console.log(map1.list === map2.list);
    }
    func2() {
        const obj = {
            count: 1,
            list: [1, 2, 3, 4, 5]
        };
        var map1 = immutable_1.fromJS(obj);
        var map2 = map1.set('count', 4);
        console.log(map1.list === map2.list); // true
    }
    func3() {
        immutable_1.Range(1, Infinity)
            .map(n => -n)
            .take(2)
            .reduce((r, n) => r + n, 0);
    }
}
exports.fromJsImPoc = fromJsImPoc;
//# sourceMappingURL=fromJsPoc.js.map