declare const require:any;
const fs = require("fs");

function loadJSON(filename: string, cb: (error: Error, data: any) => void) {
    fs.readFile(filename, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            try {
                cb(null, JSON.parse(data));
            } catch (err) {
                cb(err, null);
            }
        }
    })
}

loadJSON("src/data/bad.json", (err: Error, data: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }

    let foo;
    console.log(foo.bar);
})