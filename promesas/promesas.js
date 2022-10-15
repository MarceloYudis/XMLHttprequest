const promise = new Promise( function(resolve, reject) {
    resolve('hey')
});

const cows = 9;

const countCows = new Promise(function (resolve,reject) {
    if( cows > 10) {
        resolve('tengo suficiente oferta')
    } else{
        reject('no tengo tanta demanda')
    }
    
});

countCows.then( result => {
    console.log(result)
}).catch( error => console.log(error))
.finally(() => console.log('opama'))