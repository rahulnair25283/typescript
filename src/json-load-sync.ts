// declare var require: any;
// const fs = require("fs");

function loadJSONSync(fileName: string) {
    return JSON.parse(fs.readFileSync(fileName));
}

console.log(loadJSONSync("src/data/good.json"));

try {
    console.log(loadJSONSync("absent.json"));
} catch (err) {
    console.log(`absent.json error ${err.message}`);
}

try {
    console.log(loadJSONSync("src/data/bad.json"));
} catch (err) {
    console.log(`bad.json error ${err.message}`);
}