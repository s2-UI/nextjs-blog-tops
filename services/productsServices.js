export async function getProducts(){
    const request = await fetch ('https://tops-six.vercel.app/api/televisions')
    const data = await request.json();

    return data;
}