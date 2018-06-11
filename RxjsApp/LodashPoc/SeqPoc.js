"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class SeqPoc {
    test() {
        this.chinaFunc();
    }
    chinaFunc() {
        function square(n) {
            return n * n;
        }
        const wrapped = _([1, 2, 3]);
        //  Returns an unwrapped value.
        wrapped.reduce(_.add);
        //  => 6
        //  Returns a wrapped value.
        const squares = wrapped.map(square);
        _.isArray(squares);
        //  => false
        _.isArray(squares.value());
        //  => true
        const users = [
            { user: "barney", age: 36 },
            { user: "fred", age: 40 },
            { user: "pebbles", age: 1 },
        ];
        const youngest = _
            .chain(users)
            .sortBy("age")
            .map((o) => o.user + " is " + o.age)
            .head()
            .value();
        //  => 'pebbles is 1'
        _([1, 2, 3])
            .tap((array) => array.pop())
            .reverse()
            .value();
        //  => [2, 1]
        _("  abc  ")
            .chain()
            .trim()
            .thru((value) => [value])
            .value();
        //  => ['abc']
    }
}
exports.SeqPoc = SeqPoc;
//# sourceMappingURL=SeqPoc.js.map