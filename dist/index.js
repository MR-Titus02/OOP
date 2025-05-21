"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
console.log("Hello World");
const c = new circle_1.circle();
c.setRadius(7);
c.getArea();
console.log(`area of c is ${c.getArea()}`);
console.log(`perimeter of c is ${c.getPerimeter()}`);
const d = new circle_1.circle();
d.setRadius(14);
console.log(`area of c is ${d.getArea()}`);
console.log(`perimeter of c is ${d.getPerimeter()}`);
//# sourceMappingURL=index.js.map