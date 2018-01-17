import { List,Set } from 'immutable'

export class listPoc {
    test() {
        this.func1();
    }

    func1() {
        const emptyList = List()
        // List []

        const plainArray = [1, 2, 3, 4]
        const listFromPlainArray = List(plainArray)
        // List [ 1, 2, 3, 4 ]

        const plainSet = Set([1, 2, 3, 4])
        const listFromPlainSet = List(plainSet)
        // List [ 1, 2, 3, 4 ]

        const arrayIterator = plainArray[Symbol.iterator]()
        const listFromCollectionArray = List(arrayIterator)
        // List [ 1, 2, 3, 4 ]

        console.log(listFromPlainArray.equals(listFromCollectionArray)) // true
        console.log(listFromPlainSet.equals(listFromCollectionArray)) // true
        console.log(listFromPlainSet.equals(listFromPlainArray)) // true

    }

}