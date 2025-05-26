export async function createProductAsync(title, price, category) {
    const url = "https://fakestoreapi.com/products";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, price, category })
        });
        if (!response.ok) throw new Error("Error en la respuesta de la API");
        const data = await response.json();

        const { id: newId, title: newTitle, price: newPrice, category: newCategory } = data;
        console.log("Producto agregado:", { newId, newTitle, newPrice, newCategory });

    } catch (error) {
        console.error("Error agregando producto:", error);
    }
}