const resolvablePromise = new Promise((resolve, reject) => {
    resolve(123);
})

resolvablePromise.then((res) => {
    console.log(`I get called: ${res === 123}`);
})

resolvablePromise.catch((err) => {
    console.log(err.message);
});

const rejectablePromise = new Promise((resolve, reject) => {
    reject(new Error("something horrible happened"));
})

rejectablePromise.then((res) => {
    console.log(res);
})

rejectablePromise.catch((err) => {
    console.log(`I get called: ${err.message}`);
})

const iReturnPromiseAfterOneSecond = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello World"), 1000);
    });
}

Promise.resolve(123)
    .then((res) => {
        return iReturnPromiseAfterOneSecond();
    })
    .then((res) => {
        console.log(res);
    });
