export function* idMaker() {
    let index = 0;
    while (index < 3) {
        yield index++;
    }
}

let idGen = idMaker();
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());

export function* generator() {
    console.log("execution started");
    yield 0;
    console.log("execution resumed after 0");
    yield 1;
    console.log("execution resumed after 0");
}

var gen = generator();
console.log("starting iteration");
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

export function* generator2() {
    var bar = yield "foo";
    console.log(bar);
}

let gen2 = generator2();
console.log(gen2.next());
console.log(gen2.next("bar"));
