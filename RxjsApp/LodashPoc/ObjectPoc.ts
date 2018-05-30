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
}
