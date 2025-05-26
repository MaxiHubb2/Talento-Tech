export async function deleteProductByIDAsync(id) {
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
        const response = await fetch(url, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        const data = await response.json();

        const { id: deletedId, title, price, category } = data;
        console.log("Producto eliminado:", { deletedId, title, price, category });
    } catch (error) {
        console.error("Error eliminando producto:", error);
    }
}