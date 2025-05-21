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
    setName(n) {
        this.name = n;
    }
    setId(i) {
        this.id = i;
    }
    setNic(n) {
        this.Nic = n;
    }
    setHtml_marks(m) {
        this.Html_marks = m;
    }
    setCss_marks(m) {
        this.Css_marks = m;
    }
    setJs_marks(m) {
        this.Js_marks = m;
    }
    setGit_marks(m) {
        this.git_marks = m;
    }
    setAvg_marks() {
        return (this.Html_marks + this.Css_marks + this.Js_marks + this.git_marks) / 4;
    }
}
exports.student = student;
//# sourceMappingURL=student.js.map