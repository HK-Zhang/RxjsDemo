"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class ObjectPoc {
    test() {
        this.assignFun();
    }
    assignFun() {
        function Foo() {
            this.a = 1;
        }
        function Bar() {
            this.c = 3;
        }
        Foo.prototype.b = 2;
        Bar.prototype.d = 4;
        _.assign({ a: 0 }, new Foo(), new Bar());
        //  => { 'a': 1, 'c': 3 }
        _.assignIn({ a: 0 }, new Foo(), new Bar());
        //  => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
        function customizer(objValue, srcValue) {
            return _.isUndefined(objValue) ? srcValue : objValue;
        }
        const defaults = _.partialRight(_.assignInWith, customizer);
        defaults({ a: 1 }, { b: 2 }, { a: 3 });
        //  => { 'a': 1, 'b': 2 }
        const defaults2 = _.partialRight(_.assignWith, customizer);
        defaults2({ a: 1 }, { b: 2 }, { a: 3 });
        //  => { 'a': 1, 'b': 2 }
    }
    atFunc() {
        const object = { a: [{ b: { c: 3 } }, 4] };
        _.at(object, ["a[0].b.c", "a[1]"]);
        //  => [3, 4]
        function Shape() {
            this.x = 0;
            this.y = 0;
        }
        function Circle() {
            Shape.call(this);
        }
        Circle.prototype = _.create(Shape.prototype, {
            constructor: Circle,
        });
        const circle = new Circle();
        // circle instanceof Circle;
        //  => true
        // circle instanceof Shape;
        //  => true
        _.defaults({ a: 1 }, { b: 2 }, { a: 3 });
        //  => { 'a': 1, 'b': 2 }
        _.defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
        //  => { 'a': { 'b': 2, 'c': 3 } }
    }
    findKeyFunc() {
        const users = {
            barney: { age: 36, active: true },
            fred: { age: 40, active: false },
            pebbles: { age: 1, active: true },
        };
        _.findKey(users, (o) => o.age < 40);
        //  => 'barney' (iteration order is not guaranteed)
        //  The `_.matches` iteratee shorthand.
        _.findKey(users, { age: 1, active: true });
        //  => 'pebbles'
        //  The `_.matchesProperty` iteratee shorthand.
        _.findKey(users, ["active", false]);
        //  => 'fred'
        //  The `_.property` iteratee shorthand.
        _.findKey(users, "active");
        //  => 'barney'
        _.findLastKey(users, (o) => o.age < 40);
        //  => returns 'pebbles' assuming `_.findKey` returns 'barney'
        //  The `_.matches` iteratee shorthand.
        _.findLastKey(users, { age: 36, active: true });
        //  => 'barney'
        //  The `_.matchesProperty` iteratee shorthand.
        _.findLastKey(users, ["active", false]);
        //  => 'fred'
        //  The `_.property` iteratee shorthand.
        _.findLastKey(users, "active");
        //  => 'pebbles'
    }
    forFunc() {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;
        _.forIn(new Foo(), (value, key) => {
            console.log(key);
        });
        //  => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
        _.forInRight(new Foo(), (value, key) => {
            console.log(key);
        });
        //  => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
        _.forOwn(new Foo(), (value, key) => {
            console.log(key);
        });
        //  => Logs 'a' then 'b' (iteration order is not guaranteed).
        _.forOwnRight(new Foo(), (value, key) => {
            console.log(key);
        });
        //  => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
    }
    functionFun() {
        function Foo() {
            this.a = _.constant("a");
            this.b = _.constant("b");
        }
        Foo.prototype.c = _.constant("c");
        _.functions(new Foo());
        //  => ['a', 'b']
        _.functionsIn(new Foo());
        //  => ['a', 'b', 'c']
        const object = { a: [{ b: { c: 3 } }] };
        const other = _.create({ a: _.create({ b: 2 }) });
        _.get(object, "a[0].b.c");
        //  => 3
        _.get(object, ["a", "0", "b", "c"]);
        //  => 3
        _.get(object, "a.b.c", "default");
        //  => 'default'
        _.has(object, "a");
        //  => true
        _.has(object, "a.b");
        //  => true
        _.has(object, ["a", "b"]);
        //  => true
        _.has(other, "a");
        //  => false
        _.hasIn(other, "a");
        //  => true
        _.hasIn(other, "a.b");
        //  => true
        _.hasIn(other, ["a", "b"]);
        //  => true
        _.hasIn(other, "b");
        //  => false
    }
    invertFun() {
        const object = { a: 1, b: 2, c: 1 };
        _.invert(object);
        //  => { '1': 'c', '2': 'b' }
        _.invertBy(object);
        //  => { '1': ['a', 'c'], '2': ['b'] }
        _.invertBy(object, (value) => "group" + value);
        //  => { 'group1': ['a', 'c'], 'group2': ['b'] }
        const object2 = { a: [{ b: { c: [1, 2, 3, 4] } }] };
        _.invoke(object2, "a[0].b.c.slice", 1, 3);
        //  => [2, 3]
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;
        _.keys(new Foo());
        //  => ['a', 'b'] (iteration order is not guaranteed)
        _.keys("hi");
        //  => ['0', '1']
        _.keysIn(new Foo());
        //  => ['a', 'b', 'c'] (iteration order is not guaranteed)
        _.mapKeys({ a: 1, b: 2 }, (value, key) => key + value);
        //  => { 'a1': 1, 'b2': 2 }
        const users = {
            fred: { user: "fred", age: 40 },
            pebbles: { user: "pebbles", age: 1 },
        };
        _.mapValues(users, (o) => o.age);
        //  => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
        //  The `_.property` iteratee shorthand.
        _.mapValues(users, "age");
        //  => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
    }
    mergeFunc() {
        const object = {
            a: [{ b: 2 }, { d: 4 }],
        };
        const other = {
            a: [{ c: 3 }, { e: 5 }],
        };
        _.merge(object, other);
        //  => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
        function customizer(objValue, srcValue) {
            if (_.isArray(objValue)) {
                return objValue.concat(srcValue);
            }
        }
        const object1 = { a: [1], b: [2] };
        const other1 = { a: [3], b: [4] };
        _.mergeWith(object1, other1, customizer);
        //  => { 'a': [1, 3], 'b': [2, 4] }
    }
    omitFunc() {
        const object = { a: 1, b: "2", c: 3 };
        _.omit(object, ["a", "c"]);
        //  => { 'b': '2' }
        _.omitBy(object, _.isNumber);
        //  => { 'b': '2' }
        _.pick(object, ["a", "c"]);
        //  => { 'a': 1, 'c': 3 }
        _.pickBy(object, _.isNumber);
        //  => { 'a': 1, 'c': 3 }
    }
    resultFunc() {
        const object = { a: [{ b: { c1: 3, c2: _.constant(4) } }] };
        _.result(object, "a[0].b.c1");
        //  => 3
        _.result(object, "a[0].b.c2");
        //  => 4
        _.result(object, "a[0].b.c3", "default");
        //  => 'default'
        _.result(object, "a[0].b.c3", _.constant("default"));
        //  => 'default'
    }
    setFunc() {
        const object = { a: [{ b: { c: 3 } }] };
        _.set(object, "a[0].b.c", 4);
        console.log(object.a[0].b.c);
        //  => 4
        _.set(object, ["x", "0", "y", "z"], 5);
        console.log(object.x[0].y.z);
        //  => 5
        _.setWith({}, "[0][1]", "a", Object);
        //  => { '0': { '1': 'a' } }
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;
        _.toPairs(new Foo());
        //  => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
        _.toPairsIn(new Foo());
        //  => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
    }
    unsetFunc() {
        const object = { a: [{ b: { c: 7 } }] };
        _.unset(object, "a[0].b.c");
        //  => true
        console.log(object);
        //  => { 'a': [{ 'b': {} }] };
        _.unset(object, ["a", "0", "b", "c"]);
        //  => true
        console.log(object);
        //  => { 'a': [{ 'b': {} }] };
    }
    updateFunc() {
        const object = { a: [{ b: { c: 3 } }] };
        _.update(object, "a[0].b.c", (n) => n * n);
        console.log(object.a[0].b.c);
        //  => 9
        _.update(object, "a[0].b.c", (n) => n ? n + 1 : 0);
        console.log(object.a[0].b.c);
        //  => 0
        _.updateWith({}, "[0][1]", _.constant("a"), Object);
        //  => { '0': { '1': 'a' } }
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;
        _.values(new Foo());
        //  => [1, 2] (iteration order is not guaranteed)
        _.values("hi");
        //  => ['h', 'i']
        _.valuesIn(new Foo());
        //  => [1, 2, 3] (iteration order is not guaranteed)
    }
}
exports.ObjectPoc = ObjectPoc;
//# sourceMappingURL=ObjectPoc.js.map