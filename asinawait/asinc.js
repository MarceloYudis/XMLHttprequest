const LoLasync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Async'), 1500)
        : reject(new Error('error'))
    })

}

const secondFn = async () => {
    const a = await LoLasync();

    console.log(a);
    console.log("the end")
}

console.log("first");
secondFn();
console.log("last")