// for-of should only be used for arrays and strings. If used with objects, the results may be unexpected.

let foor = [1,2,3,4,5];
for (let item in foor) {
    console.log(item);
}

for (let item of foor) {
    console.log(item);
}

let obj1 = {
    key1: 'value1',
    key2: 'value2'
}

for (let key in obj1) {
    console.log(key, obj1[key]);
}

let str = 'hello world';
for (let char of str) {
    console.log(char);
}