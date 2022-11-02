import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function* fatherGenerator(urlApi) {
    const info = await fetch(urlApi);
    const infoToJson = await info.json();
    yield  infoToJson;
}

async function obtencionEnConsola(apiUrl) {
    const firstInfo = await fatherGenerator(`${apiUrl}/products`).next().value;
    const prroducts = firstInfo;
    console.log(prroducts);

    const oneProduct = await fatherGenerator(`${apiUrl}/products/${prroducts[0].id}`);
    console.log(oneProduct.next().value);

    const categories = await fatherGenerator(`${apiUrl}/categories/${product.category.id}`);
    console.log(categories.next().value)

    
   
    
}

obtencionEnConsola(API)

