import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";

export class MergeMapPoc {
    public test() {
        // this.func0();
        this.func01();
        // this.func1();
        // this.func3();
    }

    /**
     * func0
     */
    public func0() {
        // emit value every 1s
        const letters = Observable.of("a", "b", "c");
        const result = letters.mergeMap((x) =>
            Observable.interval(5000).map((i) => x).take(5));
        result.subscribe((x) => console.log(x));
    }

    public func01() {
        const letters = Observable.of("a", "b", "c");
        const result = letters.switchMap((x) =>
            Observable.interval(5000).map((i) => x).take(5));
        result.subscribe((x) => console.log(x));
    }

    public func1() {
        // emit value every 1s
        const letters = Observable.of("a", "b", "c");
        const result = letters.mergeMap((x) =>
            Observable.interval(1000).map((i) => x + i).take(5),
            (oV, iV, oI, iI) => {
                // console.log("innerValue", iV);
                return "inner" + iV;
            }, 2);
        result.subscribe((x) => console.log(x));
    }

    public func2() {
        // emit value every 1s
        const source = Observable.interval(1000);

        const example = source.mergeMap(
            // project
            (val) => Observable.interval(5000).take(2),
            // resultSelector
            (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
            // concurrent
            2);
        /*
                Output:
                [0, 0, 0, 0] <--1st inner observable
                [1, 1, 0, 0] <--2nd inner observable
                [0, 0, 1, 1] <--1st inner observable
                [1, 1, 1, 1] <--2nd inner observable
                [2, 2, 0, 0] <--3rd inner observable
                [3, 3, 0, 0] <--4th inner observable
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func3() {
        const post$ = Observable.of({ id: 1 });
        const getPostInfo$ = Observable.timer(3000).mapTo({ title: "Post title" });

        const posts$ = post$.mergeMap((post) => getPostInfo$).subscribe((res) => console.log(res));
    }
}
