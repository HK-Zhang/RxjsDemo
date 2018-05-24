import * as _ from "lodash";



export class Poc {
    public test() {
        this.func1();
    }

    public func1() {
        const a = _.padStart("Hello TypeScript!", 20, " ");
        console.log(a);
    }

}
