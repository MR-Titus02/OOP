export class student {
    name: string = "Titus";
    id: number = 1;
    Nic: number = 123456789;
    Html_marks: number = 0;
    Css_marks: number = 0;
    Js_marks: number = 0;
    git_marks: number = 0;

    setName(n: string): void {
        this.name = n;
    }
    setId(i: number): void {
        this.id = i;
    }
    setNic(n: number): void {
        this.Nic = n;
    }
    setHtml_marks(m: number): void {    
        this.Html_marks = m;
    }  
    setCss_marks(m: number): void {    
        this.Css_marks = m;
    }
    setJs_marks(m: number): void {    
        this.Js_marks = m;
    }
    setGit_marks(m: number): void {
        this.git_marks = m;
    }
    setAvg_marks(): number {
        return (this.Html_marks + this.Css_marks + this.Js_marks + this.git_marks) / 4;
    }
}