import { Map, List} from 'immutable'

export class mapImPoc {
    test() {
        this.func1();
    }

    func1() {
        const mapOne = Map().set(List([ 1 ]), 'listofone');
        console.log(mapOne.get(List([ 1 ])));
    }

}