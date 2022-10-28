import fetch from 'node-fetch';
import { freemem } from 'os';
const API ='https://api.escuelajs.co/api/v1';

function fetchDAta(urlApi) {
    return fetch(urlApi)
};


// fetchDAta(`${API}/products`)
// .then(response => response.json())
// .then(products =>{console.log(products)})
// .then(() => console.log('hola'))
// .catch(error=>console.log(error))

fetchDAta(`${API}/products`)
.then(response=> response.json())
.then(products=> {
    return fetchDAta(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(products=> {
    return fetchDAta(`${API}/categories/${products.category.id}`)
})
.then(response => response.json())
.then(category => console.log(category.name))
.catch(error => console.log(error))
.finally(() => console.log('OPAMA VIEJOO'))