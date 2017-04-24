let foo = {
    bar: {
        bas: {
            qug: 200
        }
    }
}

let {bar} = foo;
console.log(bar);
let {bar:{bas}} = foo;
console.log(bas);
let {bar: {bas: {qug}}} = foo;
console.log(qug);

let arr = [1,2,3,4,5];
let [a, , b, ...rest] = arr;
console.log(a, b, rest);