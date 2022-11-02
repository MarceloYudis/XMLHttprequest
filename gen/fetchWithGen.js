import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function* fatherGenerator(urlApi) {
    const info = fetch(urlApi);
    const infoToJson = info.json();
    yield  infoToJson();
}

function obtencionEnConsola(apiUrl) {
    const firstInfo = fatherGenerator(`${apiUrl}/products`);
    console.log(firstInfo.next().value);

    const oneProduct = fatherGenerator(`${apiUrl}/products/${products[0].id}`);
    console.log(oneProduct.next().value);

    const categories = fatherGenerator(`${apiUrl}/categories/${product.category.id}`);
    console.log(categories.next().value)

    
   
    
}

obtencionEnConsola(API)

