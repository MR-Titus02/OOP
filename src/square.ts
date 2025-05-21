export class square {
    side:number=1

    setSide(s:number):void{
        this.side = s;
    }
    getArea():number{
        return this.side * this.side;
    }
    getPerimeter():number{
        return 4 * this.side;
    }
}