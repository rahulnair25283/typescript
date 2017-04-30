const loadItem = (id: number): Promise<{id: number}> => {
    return new Promise((resolve) => {
        console.log(`loading item ${id}`);
        setTimeout(() => {
            resolve({id: id});
        }, 1000);
    });
}

let item1, item2;
Promise.all([loadItem(1), loadItem(2)])
.then((res) => {
    console.log(res);
    [item1, item2] = res;
    console.log("done");
})