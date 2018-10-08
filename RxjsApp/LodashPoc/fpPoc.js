"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fp = require("lodash/fp");
class FPpoc {
    test() {
        // this.composeFunc();
        this.curryFunc();
    }
    composeFunc() {
        const data = [{
                firstName: "justin",
                lastName: "fuller",
                phone: "1234568490"
            }];
        function formatPhone(c) {
            return (Object.assign({}, c, { phone: `(${c.phone.slice(0, 2)})${c.phone.slice(3, 5)} - ${c.phone.slice(6)}` }));
        }
        const formatData = fp.compose(fp.map(formatPhone), fp.uniqBy("phone"), fp.filter("phone"), fp.sortBy("firstName"));
        console.log(JSON.stringify(formatData(data)));
        // => [{"firstName":"justin","lastName":"fuller","phone":"(12)45 - 8490"}]
    }
    curryFunc() {
        const addCurried = (x) => (y) => (z) => x + y + z;
        const addTwo = addCurried(2); // function
        const addFour = addTwo(4);
        const result = addFour(3); // 5
        console.log(result);
        // => 5
    }
}
exports.FPpoc = FPpoc;
//# sourceMappingURL=fpPoc.js.map