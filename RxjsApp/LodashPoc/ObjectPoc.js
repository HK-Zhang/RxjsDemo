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
}
exports.ObjectPoc = ObjectPoc;
//# sourceMappingURL=ObjectPoc.js.map