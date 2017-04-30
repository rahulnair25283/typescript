declare const require: any;
const fs = require("fs");

const readFileAsync = (filename: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

const loadJSONAsync = (filename): Promise<any> => {
    return new Promise((resolve, reject) => {
        readFileAsync(filename)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            });
    });
}

loadJSONAsync("src/data/good.json")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

loadJSONAsync("absent.json")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

loadJSONAsync("src/data/bad.json")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });