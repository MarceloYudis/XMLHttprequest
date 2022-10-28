const promesita = new Promise( function (resolve, reject) {
    resolve('hey!')
});

const cows = 9;

const countCows = new Promise( function(resolve,reject) {
    if(cows > 10) {
        resolve('si hay man')
    }else {
        reject('no alcanza viejo D:')
    }
})

countCows.then((result) => console.log(result)).catch((error)=> console.log(error));
