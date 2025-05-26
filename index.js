import readline from "readline";
import { fetchAllProducts } from "./Service/fetchAllProducts.js";
import { fetchProductByIDAsync } from "./Service/fetchProductFromID.js";
import { createProductAsync } from "./Service/createProduct.js";
import { deleteProductByIDAsync } from "./Service/deleteProductByID.js";

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nComandos disponibles:");
    console.log("1. GETALL - Obtener todos los productos");
    console.log("2. GET <id> - Obtener producto por ID");
    console.log("3. POST <title> <price> <category> - Crear un nuevo producto");
    console.log("4. DELETE <id> - Eliminar producto por ID");
    console.log("5. EXIT - Salir del programa");
    readlineInterface.question("\nElegí una opción: ", handleMenu);
}

async function handleMenu(option) {
    switch (option.trim()) {
        case "1":
            await fetchAllProducts();
            showMenu();
            break;
        case "2":
            readlineInterface.question("Ingresá el ID del producto: ", async (id) => {
                await fetchProductByIDAsync(id);
                showMenu();
            });
            break;
        case "3":
            readlineInterface.question("Ingresá el título: ", (title) => {
                readlineInterface.question("Ingresá el precio: ", (price) => {
                    readlineInterface.question("Ingresá la categoría: ", async (category) => {
                        await createProductAsync(title, price, category);
                        showMenu();
                    });
                });
            });
            break;
        case "4":
            readlineInterface.question("Ingresá el ID del producto a eliminar: ", async (id) => {
                await deleteProductByIDAsync(id);
                showMenu();
            });
            break;
        case "5":
            console.log("¡Hasta luego!");
            readlineInterface.close();
            process.exit(0);
        default:
            console.log("Opción no reconocida.");
            showMenu();
    }
}

showMenu();
