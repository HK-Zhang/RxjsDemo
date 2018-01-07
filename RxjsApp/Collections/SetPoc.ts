import * as Collections from 'typescript-collections';

export class SetPoc {
    test() {
        this.func1();
    }

    func1() {
        var mySet = new Collections.Set<number>();
        mySet.add(123);
        mySet.add(123); // Duplicates not allowed in a set
// The following will give error due to wrong type:
// mySet.add("asdf"); // Can only add numbers since that is the type argument.

        mySet.forEach(t => { console.log(t) });
    }

}