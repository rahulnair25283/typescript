export class Component {
    constructor(public name: string) { }
}

export class Frame implements IterableIterator<Component> {
    
    private pointer: number = 0;
    constructor(public name: string, public components: Component[]) { }

    [Symbol.iterator](): IterableIterator<Component> {
        return this;
    }

    next(value?: any): IteratorResult<Component> {
        if (this.pointer < components.length) {
            return {
                done: false,
                value: components[this.pointer++]
            };
        } else {
            return {
                done: true,
                value: null
            };
        }
    }
}


let components = [new Component("left"), new Component("right"), new Component("top"), new Component("bottom")];
let frame = new Frame("door", components);

for (let component of frame) {
    console.log(component);
}


class Fibonacci implements IterableIterator<number> {
    
    private fnumber1 = 0;
    private fnumber2 = 1;

    constructor(public maxValue:number){}
    
    [Symbol.iterator](): IterableIterator<number> {
        return this;
    }

    next(value?: any): IteratorResult<number> {
        var temp = this.fnumber1;
        this.fnumber1 = this.fnumber2;
        this.fnumber2 = temp + this.fnumber1;

        if (this.maxValue && temp <= this.maxValue) {
            return {
                done: false,
                value: temp
            };
        } else {
            return {
                done: true,
                value: null
            }
        }
    }
}

let fSeries = new Fibonacci(21);
for (let val of fSeries) {
    console.log(val);
}