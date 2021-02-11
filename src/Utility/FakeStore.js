const fakeURLStart = 'https://fakestoreapi.com/';

export const getAllProducts = async () => {
    const apiURL = fakeURLStart + 'products';
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    return data;
};

export const getSingleProduct = async (id) => {
    const apiURL = fakeURLStart + `products/${id}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data.results[0]);
}