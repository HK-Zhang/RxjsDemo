import * as _ from "lodash";



export class Poc {
    test() {
        this.func1();
    }

    func1() {
        let a = _.padStart("Hello TypeScript!", 20, " ");
        console.log(a);
    }

}