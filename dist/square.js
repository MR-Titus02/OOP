"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = void 0;
class square {
    constructor() {
        this.side = 1;
    }
    setSide(s) {
        this.side = s;
    }
    getArea() {
        return this.side * this.side;
    }
    getPerimeter() {
        return 4 * this.side;
    }
}
exports.square = square;
//# sourceMappingURL=square.js.map