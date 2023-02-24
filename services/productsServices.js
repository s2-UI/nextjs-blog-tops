export async function getProducts(){
    const request = await fetch ('http://localhost:3000//api/televisions')
    const data = await request.json();

    return data;
}