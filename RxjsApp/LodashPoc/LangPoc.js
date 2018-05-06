"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class LangPoc {
    test() {
        // this.clonePoc();
        // this.conformsToFunc();
        this.isBooleanFunc();
    }
    clonePoc() {
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
    conformsToFunc() {
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
    isArrayFunc() {
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
    isBooleanFunc() {
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
    isEqualFunc() {
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
}
exports.LangPoc = LangPoc;
//# sourceMappingURL=LangPoc.js.map