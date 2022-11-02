import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

export default async function fatherGenerator(urlApi) {
    const info = await fetch(urlApi);
    const infoToJson = await info.json();
    return infoToJson;
}

async function* obtencionEnConsola(apiUrl) {
    try{
        const firstInfo = await fatherGenerator(`${apiUrl}/products`);
    const prroducts = firstInfo;
    console.log(prroducts[107]);

    const oneProduct = await fatherGenerator(`${apiUrl}/products/${prroducts[0].id}`);
    console.log(oneProduct.title);

    const categories = await fatherGenerator(`${apiUrl}/categories/${oneProduct.category.id}`);
    console.log(categories.name)

    }catch (error) {
        console.log('eRRoR'. error)
    }
    
   
    
}

const result = obtencionEnConsola(API);
result.next();
result.next();

