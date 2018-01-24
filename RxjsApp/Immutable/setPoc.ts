import { Set } from 'immutable'

export class setImPoc {
    test() {
        this.func1();
    }

    func1() {

        const s1 = Set(['a','b','c']);
        const s2 = s1.intersect(Set([ 'c', 'a', 't' ]));

        s1.forEach(t=>console.log(t.valueOf()));
        s2.forEach(t=>console.log(t.valueOf()));
        
        const s3 = s1.union(Set([ 'c', 'a', 't' ]));
        s3.forEach(t=>console.log(t.valueOf()));
        
    }

}