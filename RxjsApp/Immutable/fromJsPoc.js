"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
class fromJsImPoc {
    test() {
        this.func1();
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
}
exports.fromJsImPoc = fromJsImPoc;
//# sourceMappingURL=fromJsPoc.js.map