/*function fetchProductFromID(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching product:', error));
}
*/

export async function fetchProductByIDAsync(id) {
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        const data = await response.json();

        const { title, price, category } = data;
        console.log("Producto encontrado:", { title, price, category });

    } catch (error) {
        console.error("Error obteniendo producto:", error);
    }
}