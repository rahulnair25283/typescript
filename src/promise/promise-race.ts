const task1 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("one");
        }, 1000);
    });
}

const task2 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("two")
        }, 1000);
    });
}

Promise.race([task1(), task2()])
.then((res) => {
    console.log(res === "one");
})