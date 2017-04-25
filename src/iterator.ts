interface Iterator<T> {
    next(value?: any): IteratorResult<T>
}

interface IteratorResult<T> {
    done: boolean,
    value?: T
}

class Component {
    constructor(public name:string){}
}

class Frame implements Iterator<Component> {

    private pointer: number = 0;

    constructor(public name: string, public components: Component[]) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++];
            }
        } else {
            return {
                done: true
            }
        }
    }
}

let components = [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")];
let frame = new Frame("door", components);

let component1 = frame.next();
console.log(component1);
let component2 = frame.next();
console.log(component2);
let component3 = frame.next();
console.log(component3);
let component4 = frame.next();
console.log(component4);
let component5 = frame.next();
console.log(component5);


