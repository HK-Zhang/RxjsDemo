var fp = require("lodash/fp");

export class FPpoc {
    public test() {
        this.composeFunc();
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
        console.log(formatData(data));
    }
}
