// Ejercicio 4: Carrito de Compras con Descuentos
// Manejo de estados con métodos y condicionales

// Constructor Carrito
function Carrito() {
    this.productos = [];
    this.total = 0;
}

// Método agregar producto
Carrito.prototype.agregarProducto = function(nombre, precio) {
    // Validar que el precio sea un número positivo
    if (typeof precio !== 'number' || precio <= 0) {
        console.log("Error: El precio debe ser un número positivo.");
        return;
    }
    
    const producto = {
        nombre: nombre,
        precio: precio
    };
    
    this.productos.push(producto);
    this.total += precio;
    console.log(`"${nombre}" agregado al carrito. Precio: $${precio.toFixed(2)}`);
};

// Método mostrar productos
Carrito.prototype.mostrarProductos = function() {
    if (this.productos.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }
    
    console.log("Productos en el carrito:");
    console.log("========================");
    for (let i = 0; i < this.productos.length; i++) {
        console.log(`${i + 1}. ${this.productos[i].nombre} - $${this.productos[i].precio.toFixed(2)}`);
    }
    console.log(`Subtotal: $${this.total.toFixed(2)}`);
};

// Método calcular descuento
Carrito.prototype.calcularDescuento = function() {
    let descuento = 0;
    let porcentajeDescuento = 0;
    let totalFinal = this.total;
    
    console.log("\n--- Cálculo de Descuento ---");
    console.log(`Subtotal: $${this.total.toFixed(2)}`);
    
    if (this.total > 100) {
        porcentajeDescuento = 10;
        descuento = this.total * 0.10;
        totalFinal = this.total - descuento;
        console.log(`¡Descuento del ${porcentajeDescuento}% aplicado!`);
        console.log(`Descuento: -$${descuento.toFixed(2)}`);
    } else if (this.total > 50) {
        porcentajeDescuento = 5;
        descuento = this.total * 0.05;
        totalFinal = this.total - descuento;
        console.log(`¡Descuento del ${porcentajeDescuento}% aplicado!`);
        console.log(`Descuento: -$${descuento.toFixed(2)}`);
    } else {
        console.log("No se aplica descuento.");
    }
    
    console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
    return totalFinal;
};

// Método vaciar carrito
Carrito.prototype.vaciar = function() {
    this.productos = [];
    this.total = 0;
    console.log("Carrito vaciado.");
};

// Método eliminar producto
Carrito.prototype.eliminarProducto = function(indice) {
    if (indice >= 0 && indice < this.productos.length) {
        const productoEliminado = this.productos[indice];
        this.total -= productoEliminado.precio;
        this.productos.splice(indice, 1);
        console.log(`"${productoEliminado.nombre}" eliminado del carrito.`);
    } else {
        console.log("Índice inválido.");
    }
};

// Pruebas
console.log("=== EJERCICIO 4: CARRITO DE COMPRAS CON DESCUENTOS ===");

// Crear un carrito
const miCarrito = new Carrito();

// Caso 1: Sin descuento (menos de $50)
console.log("\n--- CASO 1: Sin descuento ---");
miCarrito.agregarProducto("Notebook", 15.99);
miCarrito.agregarProducto("Bolígrafo", 2.50);
miCarrito.mostrarProductos();
miCarrito.calcularDescuento();

// Vaciar carrito para siguiente prueba
miCarrito.vaciar();

// Caso 2: Descuento del 5% (entre $50 y $100)
console.log("\n--- CASO 2: Descuento del 5% ---");
miCarrito.agregarProducto("Camiseta", 25.00);
miCarrito.agregarProducto("Pantalón", 45.00);
miCarrito.mostrarProductos();
miCarrito.calcularDescuento();

// Caso 3: Descuento del 10% (más de $100)
console.log("\n--- CASO 3: Descuento del 10% ---");
miCarrito.agregarProducto("Zapatos", 80.00);
miCarrito.mostrarProductos();
miCarrito.calcularDescuento();

// Caso 4: Carrito con varios productos
console.log("\n--- CASO 4: Carrito completo ---");
const carritoCompleto = new Carrito();
carritoCompleto.agregarProducto("Laptop", 899.99);
carritoCompleto.agregarProducto("Mouse", 25.50);
carritoCompleto.agregarProducto("Teclado", 75.00);
carritoCompleto.mostrarProductos();
carritoCompleto.calcularDescuento();
