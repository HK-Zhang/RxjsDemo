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

        const  array  = _.times(3, _.constant);
        const objects2  = {  a: array, b: array, c: array  };

        _.map(["a[2]", "c[0]"], _.methodOf(objects2));
        //  => [2, 0]

        _.map([["a", "2"], ["c", "0"]], _.methodOf(objects2));
        //  => [2, 0]
    }
}
