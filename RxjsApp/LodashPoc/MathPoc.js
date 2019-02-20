"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class MathPoc {
    test() {
        this.addFun();
    }
    addFun() {
        _.add(6, 4);
        //  => 10
        _.ceil(4.006);
        //  => 5
        _.ceil(6.004, 2);
        //  => 6.01
        _.ceil(6040, -2);
        //  => 6100
        _.divide(6, 4);
        //  => 1.5
        _.floor(4.006);
        //  => 4
        _.floor(0.046, 2);
        //  => 0.04
        _.floor(4060, -2);
        //  => 4000
        _.max([4, 2, 8, 6]);
        //  => 8
        _.max([]);
        //  => undefined
        _.mean([4, 2, 8, 6]);
        //  => 5
        const objects = [{ n: 1 }, { n: 2 }];
        _.maxBy(objects, (o) => o.n);
        //  => { 'n': 2 }
        //  The `_.property` iteratee shorthand.
        _.maxBy(objects, "n");
        //  => { 'n': 2 }
        const objects2 = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
        _.meanBy(objects2, (o) => o.n);
        //  => 5
        //  The `_.property` iteratee shorthand.
        _.meanBy(objects2, "n");
        //  => 5
        _.min([4, 2, 8, 6]);
        //  => 2
        _.min([]);
        //  => undefined
    }
    meanbyFun() {
        const objects = [{ n: 1 }, { n: 2 }];
        _.minBy(objects, (o) => o.n);
        //  => { 'n': 1 }
        //  The `_.property` iteratee shorthand.
        _.minBy(objects, "n");
        //  => { 'n': 1 }
        _.multiply(6, 4);
        //  => 24
        _.round(4.006);
        //  => 4
        _.round(4.006, 2);
        //  => 4.01
        _.round(4060, -2);
        //  => 4100
        _.subtract(6, 4);
        //  => 2
        _.sum([4, 2, 8, 6]);
        //  => 20
        const objects2 = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
        _.sumBy(objects2, (o) => o.n);
        //  => 20
        //  The `_.property` iteratee shorthand.
        _.sumBy(objects2, "n");
        //  => 20
    }
}
exports.MathPoc = MathPoc;
//# sourceMappingURL=MathPoc.js.map