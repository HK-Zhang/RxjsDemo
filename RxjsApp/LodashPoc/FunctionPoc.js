"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class FunctionPoc {
    test() {
        // this.afterPoc();
        // this.bindPoc();
        // this.curryFunc();
        // this.curryRightFunc();
        this.deferFunc();
        // this.flipFunc();
    }
    afterPoc() {
        const fp = _.after(3, () => console.log("OMG!"));
        fp();
        fp();
        fp();
        // => OMG!
        //         var saves = ['profile', 'settings'];
        //
        // var done = _.after(saves.length, function() {
        //   console.log('done saving!');
        // });
        //
        // _.forEach(saves, function(type) {
        //   asyncSave({ 'type': type, 'complete': done });
        // });
        //  => Logs 'done saving!' after the two async saves have completed.
        const v1 = _.map(["6", "8", "10"], _.ary(parseInt, 1));
        console.log(JSON.stringify(v1));
        // => [6,8,10]
        const ff = _.before(4, () => console.log(new Date().getTime().toString()));
        ff();
        ff();
        ff();
        ff();
        // => 1534738375506
        // 1534738375507
        // 1534738375507
        // jQuery(element).on('click', _.before(5, addContactToList));
        //  => Allows adding up to 4 contacts to the list.
    }
    bindPoc() {
        function greet(greeting, punctuation) {
            return greeting + " " + this.user + punctuation;
        }
        const object = { user: "fred" };
        const bound1 = _.bind(greet, object, "hi");
        console.log(bound1("!"));
        //  => 'hi fred!'
        //  Bound with placeholders.
        const bound = _.bind(greet, object, _, "!");
        console.log(bound("hi"));
        //  => 'hi fred!'
        const object2 = {
            user: "fred",
            greet(greeting, punctuation) {
                return greeting + " " + this.user + punctuation;
            },
        };
        const bound3 = _.bindKey(object2, "greet", "hi");
        console.log(bound3("!"));
        //  => 'hi fred!'
        object2.greet = function (greeting, punctuation) {
            return greeting + "ya " + this.user + punctuation;
        };
        console.log(bound3("!"));
        //  => 'hiya fred!'
        //  Bound with placeholders.
        const bound5 = _.bindKey(object2, "greet", _, "!");
        console.log(bound5("hi"));
        //  => 'hiya fred!'
    }
    curryFunc() {
        const abc = (a, b, c) => {
            return [a, b, c];
        };
        const curried = _.curry(abc);
        const v1 = curried(1)(2)(3);
        console.log(JSON.stringify(v1));
        //  => [1, 2, 3]
        const v2 = curried(1, 2)(3);
        console.log(JSON.stringify(v2));
        //  => [1, 2, 3]
        const v3 = curried(1, 2, 3);
        console.log(JSON.stringify(v3));
        //  => [1, 2, 3]
        //  Curried with placeholders.
        // curried(1)(_,  3)(2);
        //  => [1, 2, 3]
    }
    curryRightFunc() {
        const abc = (a, b, c) => {
            return [a, b, c];
        };
        const curried = _.curryRight(abc);
        const v1 = curried(3)(2)(1);
        console.log(JSON.stringify(v1));
        //  => [1, 2, 3]
        const v2 = curried(2, 3)(1);
        console.log(JSON.stringify(v2));
        //  => [1, 2, 3]
        const v3 = curried(1, 2, 3);
        console.log(JSON.stringify(v3));
        //  => [1, 2, 3]
        //  Curried with placeholders.
        // curried(3)(1,  _)(2);
        //  => [1, 2, 3]
    }
    deferFunc() {
        _.delay((text) => {
            console.log(text);
        }, 1000, "later");
        //  => Logs 'later' after one second.
        _.defer((text) => {
            console.log(text);
        }, "deferred");
        //  => Logs 'deferred' after one millisecond.
    }
    flipFunc() {
        const flipped = _.flip(() => {
            return _.toArray(arguments);
        });
        console.log(flipped("a", "b", "c", "d"));
        //  => ['d', 'c', 'b', 'a']
        const object = { a: 1, b: 2 };
        const other = { c: 3, d: 4 };
        const values = _.memoize(_.values);
        console.log(values(object));
        //  => [1, 2]
        console.log(values(other));
        //  => [3, 4]
        object.a = 2;
        console.log(values(object));
        //  => [1, 2]
        //  Modify the result cache.
        values.cache.set(object, ["a", "b"]);
        console.log(values(object));
        //  => ['a', 'b']
        //  Replace `_.memoize.Cache`.
        // _.memoize.Cache =  WeakMap;
    }
    partialFunc() {
        function greet(greeting, name) {
            return greeting + " " + name;
        }
        const sayHelloTo = _.partial(greet, "hello");
        sayHelloTo("fred");
        //  => 'hello fred'
        //  Partially applied with placeholders.
        const greetFred = _.partial(greet, _, "fred");
        greetFred("hi");
        //  => 'hi fred'
    }
    partialRightFunc() {
        function greet(greeting, name) {
            return greeting + " " + name;
        }
        const greetFred = _.partialRight(greet, "fred");
        greetFred("hi");
        //  => 'hi fred'
        //  Partially applied with placeholders.
        const sayHelloTo = _.partialRight(greet, "hello", _);
        sayHelloTo("fred");
        //  => 'hello fred'
    }
    negateFunc() {
        function isEven(n) {
            return n % 2 === 0;
        }
        _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
        //  => [1, 3, 5]
    }
    reargFunc() {
        const rearged = _.rearg((a, b, c) => [a, b, c], [2, 0, 1]);
        rearged("b", "c", "a");
        //  => ['a', 'b', 'c']
    }
    restFunc() {
        const say = _.rest((what, names) => what + " " + _.initial(names).join(", ") +
            (_.size(names) > 1 ? ", & " : "") + _.last(names));
        say("hello", "fred", "barney", "pebbles");
        //  => 'hello fred, barney, & pebbles'
    }
    spreadFunc() {
        const say = _.spread((who, what) => who + " says " + what);
        say(["fred", "hello"]);
        //  => 'fred says hello'
    }
}
exports.FunctionPoc = FunctionPoc;
//# sourceMappingURL=FunctionPoc.js.map