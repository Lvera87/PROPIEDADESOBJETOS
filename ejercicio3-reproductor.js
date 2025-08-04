// ejercicio 3: reproductor de musica
// gestion de estados de reproduccion

// constructor reproductor
function Reproductor() {
    this.estado = "detenido"; // estados posibles: "detenido", "reproduciendo", "pausado"
    this.cancionActual = null;
}

// metodo play
Reproductor.prototype.play = function(cancion = "música") {
    if (this.estado === "detenido" || this.estado === "pausado") {
        this.estado = "reproduciendo";
        this.cancionActual = cancion;
        console.log(`Reproduciendo ${cancion}...`);
    } else if (this.estado === "reproduciendo") {
        console.log("Ya se está reproduciendo música.");
    }
};

// metodo pausar
Reproductor.prototype.pausar = function() {
    if (this.estado === "reproduciendo") {
        this.estado = "pausado";
        console.log("Música pausada.");
    } else {
        console.log("No hay música reproduciéndose.");
    }
};

// metodo detener
Reproductor.prototype.detener = function() {
    this.estado = "detenido";
    this.cancionActual = null;
    console.log("Música detenida.");
};

// metodo para mostrar el estado actual
Reproductor.prototype.mostrarEstado = function() {
    if (this.cancionActual) {
        console.log(`Estado: ${this.estado} - Canción: ${this.cancionActual}`);
    } else {
        console.log(`Estado: ${this.estado}`);
    }
};

// pruebas
console.log("=== EJERCICIO 3: REPRODUCTOR DE MÚSICA ===");

// crear un reproductor
const miReproductor = new Reproductor();

// Mostrar estado inicial
console.log("\n--- Estado inicial ---");
miReproductor.mostrarEstado();

// Intentar pausar sin música
console.log("\n--- Intentar pausar sin música ---");
miReproductor.pausar();

// Reproducir música
console.log("\n--- Reproducir música ---");
miReproductor.play("Bohemian Rhapsody");
miReproductor.mostrarEstado();

// Intentar reproducir de nuevo (debe mostrar mensaje)
console.log("\n--- Intentar reproducir de nuevo ---");
miReproductor.play("Another Song");

// Pausar la música
console.log("\n--- Pausar música ---");
miReproductor.pausar();
miReproductor.mostrarEstado();

// Reproducir desde pausa
console.log("\n--- Reproducir desde pausa ---");
miReproductor.play();
miReproductor.mostrarEstado();

// Detener la música
console.log("\n--- Detener música ---");
miReproductor.detener();
miReproductor.mostrarEstado();

// Intentar pausar cuando está detenido
console.log("\n--- Intentar pausar cuando está detenido ---");
miReproductor.pausar();
