"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
class student {
    constructor() {
        this.name = "Titus";
        this.id = 1;
        this.Nic = 123456789;
        this.Html_marks = 0;
        this.Css_marks = 0;
        this.Js_marks = 0;
        this.git_marks = 0;
    }
    getName(n) {
        this.name = n;
    }
    getId(i) {
        this.id = i;
    }
    getNic(n) {
        this.Nic = n;
    }
    getHtml_marks(m) {
        this.Html_marks = m;
    }
    getCss_marks(m) {
        this.Css_marks = m;
    }
    getJs_marks(m) {
        this.Js_marks = m;
    }
    getGit_marks(m) {
        this.git_marks = m;
    }
    setAvg_marks() {
        return (this.Html_marks + this.Css_marks + this.Js_marks + this.git_marks) / 4;
    }
}
exports.student = student;
//# sourceMappingURL=student.js.map