import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function* fatherGenerator(urlApi) {
    const info = fetch(urlApi);
    const infoToJson = info.json();
    yield  infoToJson;
}

function obtencionEnConsola(apiUrl) {
    const firstInfo = fatherGenerator(`${urlApi}/products`);
    console.log(firstInfo.next().value);

    const oneProduct = fatherGenerator(`${urlApi}/products/${products[0].id}`);
    console.log(oneProduct.next().value);

    const categories = fatherGenerator(`${urlApi}/categories/${product.category.id}`);
    console.log(categories.next().value)

    
   
    
}

