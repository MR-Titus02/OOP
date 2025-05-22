export class student {
    name: string;
    id: number;
    Nic: number;
    Html_marks: number;
    Css_marks: number;
    Js_marks: number;
    git_marks: number;

    constructor() {
        this.name = "Titus";
        this.id = 1;
        this.Nic = 123456789;
        this.Html_marks = 0;
        this.Css_marks = 0;
        this.Js_marks = 0;
        this.git_marks = 0;
    }

    getName(n: string): void {
        this.name = n;
    }
    getId(i: number): void {
        this.id = i;
    }
    getNic(n: number): void {
        this.Nic = n;
    }
    getHtml_marks(m: number): void {    
        this.Html_marks = m;
    }  
    getCss_marks(m: number): void {    
        this.Css_marks = m;
    }
    getJs_marks(m: number): void {    
        this.Js_marks = m;
    }
    getGit_marks(m: number): void {
        this.git_marks = m;
    }
    setAvg_marks(): number {
        return (this.Html_marks + this.Css_marks + this.Js_marks + this.git_marks) / 4;
    }
}