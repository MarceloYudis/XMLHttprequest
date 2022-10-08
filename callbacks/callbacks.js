//reto: sumar dos elementos

function sumar(v1,v2) {
        return v1 + v2;
};

function call(num1,num2, thefunction) {
    return thefunction(num1,num2)
};

/*console.log( call(9,10,sumar) ); */

setTimeout(saludo, 2500, 'Esteban');

function saludo(frase) {
    console.log(`Hola ${frase}`)
}