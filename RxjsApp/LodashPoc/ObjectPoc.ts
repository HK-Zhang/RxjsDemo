import * as _ from "lodash";

export class ObjectPoc {
    public test() {
        this.assignFun();
    }

    public assignFun() {
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

        function  customizer(objValue, srcValue)  {
            return  _.isUndefined(objValue)  ?  srcValue  : objValue;
        }

        const  defaults  = _.partialRight(_.assignInWith, customizer);

        defaults({  a: 1  }, {  b: 2  }, {  a: 3  });
        //  => { 'a': 1, 'b': 2 }

        const defaults2 =  _.partialRight(_.assignWith,  customizer);

        defaults2({ a:  1 },  { b:  2 },  { a:  3 });
            //  => { 'a': 1, 'b': 2 }
    }

    public atFunc() {
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

        _.defaultsDeep({  a: {  b: 2  }  }, {  a: {  b: 1, c: 3  }  });
        //  => { 'a': { 'b': 2, 'c': 3 } }
    }

    public findKeyFunc() {
        const  users  = {
            barney: {  age: 36, active: true  },
            fred: {  age: 40, active: false  },
            pebbles: {  age: 1, active: true  },
        };

        _.findKey(users, (o) => o.age  <  40);
        //  => 'barney' (iteration order is not guaranteed)

        //  The `_.matches` iteratee shorthand.
        _.findKey(users, {  age: 1, active: true  });
        //  => 'pebbles'

        //  The `_.matchesProperty` iteratee shorthand.
        _.findKey(users, ["active", false]);
        //  => 'fred'

        //  The `_.property` iteratee shorthand.
        _.findKey(users, "active");
        //  => 'barney'

        _.findLastKey(users, (o) => o.age  <  40);
        //  => returns 'pebbles' assuming `_.findKey` returns 'barney'

        //  The `_.matches` iteratee shorthand.
        _.findLastKey(users, {  age: 36, active: true  });
        //  => 'barney'

        //  The `_.matchesProperty` iteratee shorthand.
        _.findLastKey(users, ["active", false]);
        //  => 'fred'

        //  The `_.property` iteratee shorthand.
        _.findLastKey(users, "active");
        //  => 'pebbles'
    }

    public forFunc() {
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

        _.forOwn(new  Foo(), (value, key)  => {
            console.log(key);
        });
        //  => Logs 'a' then 'b' (iteration order is not guaranteed).

        _.forOwnRight(new  Foo(), (value, key) =>  {
            console.log(key);
        });
        //  => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
    }

    public functionFun() {
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
        const  other  = _.create({  a: _.create({  b: 2  })  });

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
}
