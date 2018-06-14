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

        function  square(n)  {
            return  n  *  n;
        }

        const  addSquare  = _.flow([_.add, square]);
        addSquare(1, 2);
        //  => 9

        const  addSquare2  = _.flowRight([square, _.add]);
        addSquare2(1, 2);
        //  => 9

        const  object3  = {  a: 1  };

        console.log(_.identity(object3)  ===  object3);
        //  => true
    }
}
