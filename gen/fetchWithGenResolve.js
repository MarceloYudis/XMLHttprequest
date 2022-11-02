import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function* fatherGenerator(urlApi) {
    const response = await fetch(urlApi);
    yield await response.json()
}

function anotherFunction(apiUrl) {

    fatherGenerator(`${apiUrl}/products`).next().then( ({value,done}) => {
        console.log(value);
        const product = value[0].id;

        fatherGenerator(`${apiUrl}/products/${product}`).next().then( ({value, done}) => {
            console.log(value.title);
            const categorY = value.category.id;

            fatherGenerator(`${apiUrl}/categories/${categorY}`).next().then( ({value,done})=>{
                console.log(value.name)
            })
        })
    })
}

anotherFunction(API)