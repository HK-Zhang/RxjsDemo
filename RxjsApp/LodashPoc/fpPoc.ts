var fp = require("lodash/fp");

export class FPpoc {
    public test() {
        // this.composeFunc();
        this.curryFunc();
    }

    public composeFunc() {
        const data = [{
            firstName: "justin",
            lastName: "fuller",
            phone: "1234568490"}];

        function formatPhone(c: any) {
            return ({
                ...c,
                phone: `(${c.phone.slice(0, 2)})${c.phone.slice(3, 5)} - ${c.phone.slice(6)}`});
            }

        const formatData = fp.compose(
                fp.map(formatPhone),
                fp.uniqBy("phone"),
                fp.filter("phone"),
                fp.sortBy("firstName"),
              );
        console.log(JSON.stringify(formatData(data)));
        // => [{"firstName":"justin","lastName":"fuller","phone":"(12)45 - 8490"}]
    }

    public curryFunc() {
        const addCurried = (x) => (y) => x + y;
        const addTwo = addCurried(2); // function
        const result = addTwo(3); // 5
        console.log(result);
        // => 5
    }
}
