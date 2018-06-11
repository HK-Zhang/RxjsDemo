import { ClassA } from "./ClassA";

export class ClassPoc {
    public test() {
        const t = new ClassA();
        t.pa = "a";
        // below statement will not work.
        // t.newFunc = () => "Non Hope";
        (t as any).newFunc = () => "Non Hope";
        console.log((t as any).newFunc());
    }
}
