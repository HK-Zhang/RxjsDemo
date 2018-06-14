export class AsyncPoc {

    public async dramaticWelcome(): Promise<void> {
        console.log("Hello");

        for (let i = 0; i < 5; i++) {
            // await is converting Promise<number> into number
            const count: number = await this.delay(500, i);
            console.log(count);
        }

        console.log("World!");
    }

    /**
     * test
     */
    public test() {
        this.dramaticWelcome();
        console.log("Done");
    }

    public async foo1() {
        await this.dramaticWelcome();
    }

    public delay(milliseconds: number, count: number): Promise<number> {
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
    }



}
