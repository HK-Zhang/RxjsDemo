import * as _ from "lodash";

export class UtilPoc {
    public test() {
        this.conformsFun();
    }

    public conformsFun() {
        const objects = [
            { a: 2, b: 1 },
            { a: 1, b: 2 },
        ];

        _.filter(objects, _.conforms({ b(n) { return n > 1; } }));
        //  => [{ 'a': 1, 'b': 2 }]

        const object2 = _.times(2, _.constant({ a: 1 }));

        console.log(object2);
        //  => [{ 'a': 1 }, { 'a': 1 }]

        console.log(object2[0] === object2[1]);
        //  => true

        _.defaultTo(1, 10);
        //  => 1

        _.defaultTo(undefined, 10);
        //  => 10

        function square(n) {
            return n * n;
        }

        const addSquare = _.flow([_.add, square]);
        addSquare(1, 2);
        //  => 9

        const addSquare2 = _.flowRight([square, _.add]);
        addSquare2(1, 2);
        //  => 9

        const object3 = { a: 1 };

        console.log(_.identity(object3) === object3);
        //  => true
    }

    public iterateeFunc() {
        const users = [
            { user: "barney", age: 36, active: true },
            { user: "fred", age: 40, active: false },
        ];

        //  The `_.matches` iteratee shorthand.
        _.filter(users, _.iteratee({ user: "barney", active: true }));
        //  => [{ 'user': 'barney', 'age': 36, 'active': true }]

        //  The `_.matchesProperty` iteratee shorthand.
        _.filter(users, _.iteratee(["user", "fred"]));
        //  => [{ 'user': 'fred', 'age': 40 }]

        //  The `_.property` iteratee shorthand.
        _.map(users, _.iteratee("user"));
        //  => ['barney', 'fred']

        //  Create custom iteratee shorthands.
        // _.iteratee =  _.wrap(_.iteratee,  (iteratee,  func) => {
        //       return !_.isRegExp(func) ? iteratee(func) :  (string) => {
        //         return func.test(string);
        //       };
        //     });

        _.filter(["abc", "def"], /ef/);
        //  => ['def']

        const objects = [
            { a: 1, b: 2, c: 3 },
            { a: 4, b: 5, c: 6 },
        ];

        _.filter(objects, _.matches({ a: 4, c: 6 }));
        //  => [{ 'a': 4, 'b': 5, 'c': 6 }]

        _.find(objects, _.matchesProperty("a", 4));
        //  => { 'a': 4, 'b': 5, 'c': 6 }
    }

    public methodFunc() {
        const objects = [
            { a: { b: _.constant(2) } },
            { a: { b: _.constant(1) } },
        ];

        _.map(objects, _.method("a.b"));
        //  => [2, 1]

        _.map(objects, _.method(["a", "b"]));
        //  => [2, 1]

        const array = _.times(3, _.constant);
        const objects2 = { a: array, b: array, c: array };

        _.map(["a[2]", "c[0]"], _.methodOf(objects2));
        //  => [2, 0]

        _.map([["a", "2"], ["c", "0"]], _.methodOf(objects2));
        //  => [2, 0]

        _.times(2, _.noop);
        //  => [undefined, undefined]
    }

    public vowelsFunc() {
        function vowels(str) {
            return _.filter(str, (v) => /[aeiou]/i.test(v));
        }

        _.mixin({ vowels });
        (_ as any).vowels("fred");
        //  => ['e']

        (_("fred") as any).vowels().value();
        //  => ['e']

        _.mixin({ vowels }, { chain: false });
        (_("fred") as any).vowels();
        //  => ['e']

        let func = _.nthArg(1);
        func("a", "b", "c", "d");
        //  => 'b'

        func = _.nthArg(-2);
        func("a", "b", "c", "d");
        //  => 'c'
    }

    /**
     * overFunc
     */
    public overFunc() {
        const func = _.over([Math.max, Math.min]);

        func(1, 2, 3, 4);
        //  => [4, 1]
    }

    public overEveryFunc() {
        const func = _.overEvery([Boolean, isFinite]);

        func(1);
        //  => true

        func(null);
        //  => false

        func(NaN);
        //  => false
    }

    public overSomeFunc() {
        const func = _.overSome([Boolean, isFinite]);

        func(1);
        //  => true

        func(null);
        //  => true

        func(NaN);
        //  => false
    }

    public propertyFunc() {
        const objects = [
            { a: { b: 2 } },
            { a: { b: 1 } },
        ];

        _.map(objects, _.property("a.b"));
        //  => [2, 1]

        _.map(_.sortBy(objects, _.property(["a", "b"])), "a.b");
        //  => [1, 2]

        const array = [0, 1, 2];
        const objectl = { a: array, b: array, c: array };

        _.map(["a[2]", "c[0]"], _.propertyOf(objectl ));
        //  => [2, 0]

        _.map([["a", "2"], ["c", "0"]], _.propertyOf(objectl ));
        //  => [2, 0]

        _.range(4);
        //  => [0, 1, 2, 3]

        _.range(-4);
        //  => [0, -1, -2, -3]

        _.range(1, 5);
        //  => [1, 2, 3, 4]

        _.range(0, 20, 5);
        //  => [0, 5, 10, 15]

        _.range(0, -4, -1);
        //  => [0, -1, -2, -3]

        _.range(1, 4, 0);
        //  => [1, 1, 1]

        _.range(0);
        //  => []

        _.rangeRight(4);
        //  => [3, 2, 1, 0]

        _.rangeRight(-4);
        //  => [-3, -2, -1, 0]

        _.rangeRight(1, 5);
        //  => [4, 3, 2, 1]

        _.rangeRight(0, 20, 5);
        //  => [15, 10, 5, 0]

        _.rangeRight(0, -4, -1);
        //  => [-3, -2, -1, 0]

        _.rangeRight(1, 4, 0);
        //  => [1, 1, 1]

        _.rangeRight(0);
        //  => []
    }

    public runInContextFunc() {
        _.mixin({ foo: _.constant("foo") });

        const lodash = _.runInContext();
        lodash.mixin({ bar: lodash.constant("bar") });

        _.isFunction((_ as any).foo);
        //  => true
        _.isFunction((_ as any).bar);
        //  => false

        lodash.isFunction((lodash as any).foo);
        //  => false
        lodash.isFunction((lodash as any).bar);
        //  => true

        //  Create a suped-up `defer` in Node.js.
        const defer = _.runInContext({ setTimeout: setImmediate }).defer;
    }

    public stubArrayFunc() {
        const  arrays  = _.times(2, _.stubArray);

        console.log(arrays);
        //  => [[], []]

        console.log(arrays[0]  ===  arrays[1]);
        //  => false
    }

    public stubFalse() {
        _.times(2, _.stubFalse);
        //  => [false, false]
    }

    public stubObject() {
        const  objects  = _.times(2, _.stubObject);

        console.log(objects);
        //  => [{}, {}]

        console.log(objects[0]  ===  objects[1]);
        //  => false
    }
}
