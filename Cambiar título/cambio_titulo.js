function cambiarTitulo() {
    var nuevoTitulo = prompt("Introduce el nuevo título:");
    if (nuevoTitulo !== null && nuevoTitulo !== "") {
        document.title = nuevoTitulo;
    }
}

document.getElementById("cambiarTituloBtn").addEventListener("click", cambiarTitulo);

