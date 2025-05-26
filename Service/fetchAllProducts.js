/*function fetchProductsFromFakeStoreApi() {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("All Products:", data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
}
*/

export async function fetchAllProducts() {
    const url = "https://fakestoreapi.com/products";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        const data = await response.json();

        const resumen = data.map(product => {
            const { title, price, category } = product; 
            return { title, price, category };
        });
        console.log("Resumen de productos:", resumen);

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}