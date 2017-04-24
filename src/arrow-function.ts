class Person {
    constructor(private age:number) {}
    growOld() {
        this.age++;
    }
}

let p = new Person(10);
p.growOld()
console.log(p);