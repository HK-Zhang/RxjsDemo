"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class LangPoc {
    test() {
        this.clonePoc();
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
    conformsTo() {
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
}
exports.LangPoc = LangPoc;
//# sourceMappingURL=LangPoc.js.map