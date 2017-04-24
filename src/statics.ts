class Something {
    static value: number = 0;
    constructor() {
        Something.value++
    }
}

let s1 = new Something();
let s2 = new Something();
console.log(Something.value);