"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReadablePoc {
    test() {
        const isEven = (x) => x % 2 === 0;
        const isBiggerThan = (threshold) => (x) => x > threshold;
        const plus = (increment) => (x) => increment + x;
        const toChar = (x) => String.fromCharCode(x);
        const isNotVowel = (x) => x !== "A" && x !== "E" && x !== "I" && x !== "O" && x !== "U";
        const y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .filter(isEven)
            .filter(isBiggerThan(3))
            .map(plus(64))
            .map(toChar)
            .filter(isNotVowel)
            .join("");
        console.log(y);
    }
}
exports.ReadablePoc = ReadablePoc;
//# sourceMappingURL=Readable.js.map