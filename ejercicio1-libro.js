// ejercicio 1: libro (objeto basico + if)
// sistema de prestamo de libros

// constructor libro
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
}

// metodo prestar
Libro.prototype.prestar = function() {
    if (this.prestado === false) {
        this.prestado = true;
        console.log(`El libro "${this.titulo}" de ${this.autor} ha sido prestado.`);
    } else {
        console.log(`Error: El libro "${this.titulo}" ya está prestado.`);
    }
};

// metodo devolver (adicional)
Libro.prototype.devolver = function() {
    if (this.prestado === true) {
        this.prestado = false;
        console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    } else {
        console.log(`El libro "${this.titulo}" no estaba prestado.`);
    }
};

// metodo para mostrar informacion del libro
Libro.prototype.info = function() {
    const estado = this.prestado ? "Prestado" : "Disponible";
    console.log(`Libro: "${this.titulo}" por ${this.autor} - Estado: ${estado}`);
};

// pruebas
console.log("=== EJERCICIO 1: LIBRO ===");

// crear un libro
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");

// mostrar informacion inicial
libro1.info();

// intentar prestar el libro por primera vez
console.log("\n--- Primera vez prestando ---");
libro1.prestar();

// mostrar estado despues del prestamo
libro1.info();

// intentar prestar el libro por segunda vez (debe mostrar error)
console.log("\n--- Segunda vez prestando (debe dar error) ---");
libro1.prestar();

// devolver el libro
console.log("\n--- Devolviendo el libro ---");
libro1.devolver();

// intentar prestar otra vez despues de devolverlo
console.log("\n--- Prestando después de devolverlo ---");
libro1.prestar();
