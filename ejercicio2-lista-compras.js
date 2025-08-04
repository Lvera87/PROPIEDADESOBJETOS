// ejercicio 2: lista de compras (array + for)
// gestionar una lista dinamica de productos

// constructor listacompras
function ListaCompras() {
    this.productos = [];
}

// // Método agregar producto
ListaCompras.prototype.agregar = function(producto) {
    this.productos.push(producto);
    console.log(`"${producto}" ha sido agregado a la lista.`);
};

// metodo mostrar lista usando for
ListaCompras.prototype.mostrar = function() {
    if (this.productos.length === 0) {
        console.log("La lista de compras está vacía.");
        return;
    }
    
    console.log("Lista de Compras:");
    
    for (let i = 0; i < this.productos.length; i++) {
        console.log(`${i + 1}. ${this.productos[i]}`);
    }
};

// metodo para eliminar un producto
ListaCompras.prototype.eliminar = function(indice) {
    if (indice >= 0 && indice < this.productos.length) {
        const productoEliminado = this.productos.splice(indice, 1)[0];
        console.log(`"${productoEliminado}" ha sido eliminado de la lista.`);
    } else {
        console.log("Índice inválido.");
    }
};

// metodo contar productos
ListaCompras.prototype.contar = function() {
    return this.productos.length;
};

// pruebas
console.log("=== EJERCICIO 2: LISTA DE COMPRAS ===");

// crear una lista de compras
const miLista = new ListaCompras();

// mostrar lista vacia
console.log("\n--- Lista inicial ---");
miLista.mostrar();

// agregar 3 productos
console.log("\n--- Agregando productos ---");
miLista.agregar("Manzanas");
miLista.agregar("Pan");
miLista.agregar("Leche");

// mostrar la lista completa
console.log("\n--- Lista completa ---");
miLista.mostrar();

// agregar mas productos
console.log("\n--- Agregando más productos ---");
miLista.agregar("Huevos");
miLista.agregar("Queso");

// mostrar lista actualizada
console.log("\n--- Lista actualizada ---");
miLista.mostrar();

console.log(`\nTotal de productos: ${miLista.contar()}`);
