import fetch from 'node-fetch';
const API ='https://api.escuelajs.co/api/v1';

function fetchDAta(urlApi) {
    return fetch(urlApi)
};


fetchDAta(`${API}/products`)
.then(response => response.json())
.then(products =>{console.log(products)})
.then(() => console.log('hola'))
.catch(error=>console.log(error))