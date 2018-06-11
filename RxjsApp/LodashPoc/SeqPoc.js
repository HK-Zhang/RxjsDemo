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
    /**
     * wrapperFunc
     */
    wrapperFunc() {
        const wrapped = _([1, 2]);
        if (wrapped[Symbol.iterator]() === wrapped) {
            console.log(true);
        }
        //  => true
        // Array.from(wrapped);
        //  => [1, 2]
        const object = { a: [{ b: { c: 3 } }, 4] };
        _(object).at(["a[0].b.c", "a[1]"]).value();
        //  => [3, 4]
        const users = [
            { user: "barney", age: 36 },
            { user: "fred", age: 40 },
        ];
        //  A sequence without explicit chaining.
        _(users).head();
        //  => { 'user': 'barney', 'age': 36 }
        //  A sequence with explicit chaining.
        _(users)
            .chain()
            .head()
            .pick("user")
            .value();
        //  => { 'user': 'barney' }
    }
    commitFunc() {
        const array = [1, 2];
        let wrapped = _(array).push(3);
        console.log(array);
        //  => [1, 2]
        wrapped = wrapped.commit();
        console.log(array);
        //  => [1, 2, 3]
        wrapped.last();
        //  => 3
        console.log(array);
        //  => [1, 2, 3]
    }
    nextFunc() {
        // const  wrapped  = _([1, 2]);
        // wrapped.next();
        //  => { 'done': false, 'value': 1 }
        // wrapped.next();
        //  => { 'done': false, 'value': 2 }
        // wrapped.next();
        //  => { 'done': true, 'value': undefined }
        function square(n) {
            return n * n;
        }
        const wrapped = _([1, 2]).map(square);
        const other = wrapped.plant([3, 4]);
        other.value();
        //  => [9, 16]
        wrapped.value();
        //  => [1, 4]
        const array = [1, 2, 3];
        _(array).reverse().value();
        //  => [3, 2, 1]
        console.log(array);
        //  => [3, 2, 1]
        _([1, 2, 3]).value();
        //  => [1, 2, 3]
    }
}
exports.SeqPoc = SeqPoc;
//# sourceMappingURL=SeqPoc.js.map