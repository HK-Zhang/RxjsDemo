import * as _ from "lodash";

export class LangPoc {
        public test() {
                // this.clonePoc();
                // this.conformsToFunc();
                this.isBooleanFunc();
        }

        public clonePoc() {
                _.castArray(1);
                //  => [1]

                _.castArray({ a: 1 });
                //  => [{ 'a': 1 }]

                _.castArray("abc");
                //  => ['abc']

                _.castArray(null);
                //  => [null]

                _.castArray(undefined);
                //  => [undefined]

                _.castArray();
                //  => []

                const array = [1, 2, 3];
                console.log(_.castArray(array) === array);
                //  => true

                const objects = [{ a: 1 }, { b: 2 }];

                const shallow = _.clone(objects);
                console.log(shallow[0] === objects[0]);
                //  => true

                const objects2 = [{ a: 1 }, { b: 2 }];

                const deep = _.cloneDeep(objects2);
                console.log(deep[0] === objects2[0]);
                //  => false

                // function customizer(value) {
                //       if (_.isElement(value)) {
                //         return value.cloneNode(true);
                //       }
                //     }
                // var el = _.cloneWith(document.body, customizer);
                // var el = _.cloneDeepWith(document.body, customizer);
        }

        public conformsToFunc() {
                const object = { a: 1, b: 2 };

                const v1 = _.conformsTo(object, { b(n) { return n > 1; } });
                console.log(v1);
                //  => true

                const v2 = _.conformsTo(object, { b(n) { return n > 2; } });
                console.log(v2);
                //  => false

                _.eq("a", "a");
                //  => true

                _.eq("a", Object("a"));
                //  => false

                _.gt(3, 1);
                //  => true

                _.gt(3, 3);
                //  => false

                _.gte(3, 3);
                //  => true

                _.gte(1, 3);
                //  => false
        }

        public isArrayFunc() {
                _.isArray([1, 2, 3]);
                //  => true

                // _.isArray(document.body.children);
                //  => false

                _.isArray("abc");
                //  => false

                _.isArray(_.noop);
                //  => false

                _.isArrayBuffer(new ArrayBuffer(2));
                //  => true

                _.isArrayBuffer(new Array(2));
                //  => false

                _.isArrayLike([1, 2, 3]);
                //  => true

                // _.isArrayLike(document.body.children);
                //  => true

                _.isArrayLike("abc");
                //  => true

                _.isArrayLike(_.noop);
                //  => false

                _.isArrayLikeObject([1, 2, 3]);
                //  => true

                // _.isArrayLikeObject(document.body.children);
                //  => true

                _.isArrayLikeObject("abc");
                //  => false

                _.isArrayLikeObject(_.noop);
                //  => false
        }

        public isBooleanFunc() {
                _.isBoolean(false);
                //  => true

                _.isBoolean(null);
                //  => false

                _.isBuffer(new Buffer(2));
                //  => true

                _.isBuffer(new Uint8Array(2));
                //  => false

                _.isDate(new Date());
                //  => true

                _.isDate("Mon April 23 2012");
                //  => false

                const v1 = _.isEmpty(null);
                console.log(v1);
                //  => true

                const v2 = _.isEmpty(true);
                console.log(v2);
                //  => true

                const v3 = _.isEmpty(undefined);
                console.log(v3);

                const v4 = _.isEmpty(false);
                console.log(v4);

                _.isEmpty(1);
                //  => true

                _.isEmpty([1, 2, 3]);
                //  => false

                _.isEmpty({ a: 1 });
                //  => false
        }

        /**
         * name
         */
        public isEqualFunc() {
                const object = { a: 1 };
                const other = { a: 1 };

                _.isEqual(object, other);
                //  => true

                console.log(object === other);
                //  => false

                const isGreeting = (value) => /^h(?:i|ello)$/.test(value);

                const customizer = (objValue, othValue) => {
                        if (isGreeting(objValue) && isGreeting(othValue)) {
                                return true;
                        }
                };

                const array = ["hello", "goodbye"];
                const array2 = ["hi", "goodbye"];

                _.isEqualWith(array, array2, customizer);
                //  => true

                _.isError(new Error());
                //  => true

                _.isFinite(3);
                //  => true

                _.isFinite(Number.MIN_VALUE);
                //  => true

                _.isFinite(Infinity);
                //  => false

                _.isFinite("3");
                //  => false

                _.isFunction(_);
                //  => true

                _.isFunction(/abc/);
                //  => false
        }

        public isInteger() {
                _.isInteger(3);
                //  => true

                _.isInteger(Number.MIN_VALUE);
                //  => false

                _.isInteger(Infinity);
                //  => false

                _.isInteger("3");
                //  => false

                _.isLength(3);
                //  => true

                _.isLength(Number.MIN_VALUE);
                //  => false

                _.isLength(Infinity);
                //  => false

                _.isLength("3");
                //  => false

                _.isMap(new Map());
                //  => true

                _.isMap(new WeakMap());
                //  => false
        }

        public isMatch() {
                const  object  = {  a: 1, b: 2  };

                _.isMatch(object, {  b: 2  });
                //  => true

                _.isMatch(object, {  b: 1  });
                //  => false

                const isGreeting = (value) => /^h(?:i|ello)$/.test(value);

                const customizer = (objValue,  srcValue) => {
                          if  (isGreeting(objValue) && isGreeting(srcValue)) {
                            return true;
                          }
                        };

                const object2 =  { greeting:  "hello" };
                const source =  { greeting:  "hi" };

                _.isMatchWith(object2,  source,  customizer);
                        //  => true
        }

        public isNan() {
                _.isNaN(NaN);
                //  => true

                // _.isNaN(new Number(NaN));
                //  => true

                isNaN(undefined);
                //  => true

                _.isNaN(undefined);
                //  => false

                _.isNative(Array.prototype.push);
                //  => true

                _.isNative(_);
                //  => false

                _.isNil(null);
                //  => true

                _.isNil(void 0);
                //  => true

                _.isNil(NaN);
                //  => false

                _.isNull(null);
                //  => true

                _.isNull(void  0);
                //  => false
        }

        public isNumber() {
                _.isNumber(3);
                //  => true

                _.isNumber(Number.MIN_VALUE);
                //  => true

                _.isNumber(Infinity);
                //  => true

                _.isNumber("3");
                //  => false

                _.isObject({});
                //  => true

                _.isObject([1, 2, 3]);
                //  => true

                _.isObject(_.noop);
                //  => true

                _.isObject(null);
                //  => false

                _.isObjectLike({});
                //  => true

                _.isObjectLike([1, 2, 3]);
                //  => true

                _.isObjectLike(_.noop);
                //  => false

                _.isObjectLike(null);
                //  => false

                const Foo = () => {
                          const a =  1;
                        };

                _.isPlainObject(new Foo());
                        //  => false

                _.isPlainObject([1,  2,  3]);
                        //  => false

                _.isPlainObject({ x:  0,  y:  0 });
                        //  => true

                _.isPlainObject(Object.create(null));
                        //  => true
        }

        public isRegExp() {
                _.isRegExp(/abc/);
                //  => true

                _.isRegExp("/abc/");
                //  => false

                _.isSafeInteger(3);
                //  => true

                _.isSafeInteger(Number.MIN_VALUE);
                //  => false

                _.isSafeInteger(Infinity);
                //  => false

                _.isSafeInteger("3");
                //  => false

                _.isSet(new Set());
                //  => true

                _.isSet(new WeakSet());
                //  => false

                _.isString("abc");
                //  => true

                _.isString(1);
                //  => false

                _.isSymbol(Symbol.iterator);
                //  => true

                _.isSymbol("abc");
                //  => false

                _.isTypedArray(new Uint8Array([1]));
                //  => true

                _.isTypedArray([]);
                //  => false

                _.isUndefined(void 0);
                //  => true

                _.isUndefined(null);
                //  => false

                _.isWeakMap(new WeakMap());
                //  => true

                _.isWeakMap(new Map());
                //  => false

                _.isWeakSet(new  WeakSet());
                //  => true

                _.isWeakSet(new  Set());
                //  => false

        }

        public ltFunc() {
                _.lt(1, 3);
                //  => true

                _.lt(3, 3);
                //  => false

                _.lt(3, 1);
                //  => false

                _.lte(1, 3);
                //  => true

                _.lte(3, 3);
                //  => true

                _.lte(3, 1);
                //  => false

                _.toArray({ a: 1, b: 2 });
                //  => [1, 2]

                _.toArray("abc");
                //  => ['a', 'b', 'c']

                _.toArray(1);
                //  => []

                _.toArray(null);
                //  => []

                _.toFinite(3.2);
                //  => 3.2

                _.toFinite(Number.MIN_VALUE);
                //  => 5e-324

                _.toFinite(Infinity);
                //  => 1.7976931348623157e+308

                _.toFinite("3.2");
                //  => 3.2

                _.toInteger(3.2);
                //  => 3

                _.toInteger(Number.MIN_VALUE);
                //  => 0

                _.toInteger(Infinity);
                //  => 1.7976931348623157e+308

                _.toInteger("3.2");
                //  => 3

                _.toLength(3.2);
                //  => 3

                _.toLength(Number.MIN_VALUE);
                //  => 0

                _.toLength(Infinity);
                //  => 4294967295

                _.toLength("3.2");
                //  => 3

                _.toNumber(3.2);
                //  => 3.2

                _.toNumber(Number.MIN_VALUE);
                //  => 5e-324

                _.toNumber(Infinity);
                //  => Infinity

                _.toNumber("3.2");
                //  => 3.2

                _.toSafeInteger(3.2);
                //  => 3

                _.toSafeInteger(Number.MIN_VALUE);
                //  => 0

                _.toSafeInteger(Infinity);
                //  => 9007199254740991

                _.toSafeInteger("3.2");
                //  => 3

                _.toString(null);
                //  => ''

                _.toString(-0);
                //  => '-0'

                _.toString([1, 2, 3]);
                //  => '1,2,3'

                function Foo() {
                          this.b =  2;
                        }

                Foo.prototype.c =  3;

                _.assign({ a:  1 },  new Foo());
                        //  => { 'a': 1, 'b': 2 }

                _.assign({ a:  1 },  _.toPlainObject(new Foo()));
                        //  => { 'a': 1, 'b': 2, 'c': 3 }
        }
}
