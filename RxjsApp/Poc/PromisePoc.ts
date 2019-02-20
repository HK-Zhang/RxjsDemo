export class PromisePoc {
    public test() {
        const momsPromise = new Promise((resolve, reject) => {
            const momsSavings = 200000;
            const priceOfPhone = 60000;
            if (momsSavings > priceOfPhone) {
                resolve({
                    brand: "iphone",
                    model: "6s",
                });
            } else {
                reject("We donot have enough savings. Let us save some more money.");
            }
        });
        momsPromise.then((value) => {
            console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
        });
        momsPromise.catch((reason) => {
            console.log("Mom coudn't buy me the phone because ", reason);
        });
        (momsPromise as any).finally(() => {
            console.log(
                "Irrespecitve of whether my mom can buy me a phone or not, I still love her",
            );
        });
    }
}
