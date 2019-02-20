type Readonly<T> = {
    readonly [P in keyof T] : T[P];
};


interface IPerson {
    name: string;
    age: number;
}

type ReadOnlyPerson = Readonly<IPerson>;

export class MappedTypePoc {

    public test() {
        this.readonlyType();
    }

    public readonlyType() {
        const rp: ReadOnlyPerson = {name: "Henry", age: 21};
        console.log(rp.name);

        // not allowed to change readonly property.
        // rp.name = "jim";
    }

}
