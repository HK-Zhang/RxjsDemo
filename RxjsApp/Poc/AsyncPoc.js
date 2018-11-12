"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncPoc {
    dramaticWelcome() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Hello");
            for (let i = 0; i < 5; i++) {
                // await is converting Promise<number> into number
                const count = yield this.delay(500, i);
                console.log(count);
            }
            console.log("World!");
        });
    }
    /**
     * test
     */
    test() {
        this.dramaticWelcome();
        console.log("Done");
    }
    foo1() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dramaticWelcome();
            console.log("Done");
        });
    }
    delay(milliseconds, count) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
    }
}
exports.AsyncPoc = AsyncPoc;
//# sourceMappingURL=AsyncPoc.js.map