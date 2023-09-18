// Array de productos con sus IDs y precios
var productos = [
    { id: "producto1", nombre: "Camiseta", precio: 7000 },
    { id: "producto2", nombre: "Zapatos", precio: 47000 },
    { id: "producto3", nombre: "Pantalones", precio: 15000 }
];

// Array para almacenar los productos seleccionados
var carrito = [];
var totalCompra = 0;

// Función para mostrar la lista de productos en prompt
function mostrarProductos() {
    var listaProductos = "Productos Disponibles:\n";
    
    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        listaProductos += `${producto.id}: ${producto.nombre} - Precio: $${producto.precio}\n`;
    }

    while (true) {
        var mensaje = prompt(listaProductos + "Ingrese el ID del producto que desea comprar (o escriba 'terminar' para finalizar la compra):");
        
        if (mensaje === null || mensaje.toLowerCase() === "terminar") {
            break; // Salir del bucle si el usuario cancela o escribe 'terminar'
        }

        var productoElegido = productos.find(function (producto) {
            return producto.id === mensaje;
        });

        if (productoElegido) {
            carrito.push(productoElegido);
            totalCompra += productoElegido.precio;
            console.log(`Producto agregado al carrito: ${productoElegido.nombre}`);
        } else {
            console.log("El ID del producto no es válido. Por favor, seleccione un ID válido o escriba 'terminar' para finalizar la compra.");
        }
    }

    // Mostrar los productos seleccionados y el total en la consola
    console.log("Productos en el Carrito:");
    if (carrito.length === 0) {
        console.log("No se han seleccionado productos.");
    } else {
        for (var i = 0; i < carrito.length; i++) {
            console.log(`ID: ${carrito[i].id} - ${carrito[i].nombre}`);
        }
        console.log(`Total de la Compra: $${totalCompra.toFixed(2)}`);
    }
}

// Llamamos a la función para mostrar productos
mostrarProductos();
