alert("Número total de enlaces: " + document.links.length);
alert("El primer enlace apunta a: " + document.links[0].href);

const tercerParrafo = document.getElementById("p3");
const enlacesP3 = tercerParrafo.getElementsByTagName("a").length;
alert("Enlaces en el tercer párrafo: " + enlacesP3);

function nuevoParrafo() {
    const nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo párrafo";
    document.body.appendChild(nuevo);
}

function quitaParrafo() {
    const parrafos = document.getElementsByTagName("p");
    if (parrafos.length > 0) {
        parrafos[parrafos.length - 1].remove();
    }
}

document.getElementsByTagName("p")[0].onclick = nuevoParrafo;
document.getElementsByTagName("p")[1].onclick = quitaParrafo;

function cambiarColor() {
    document.getElementsByTagName("p")[0].style.backgroundColor = "yellow";
}

function ocultarParrafo() {
    document.getElementsByTagName("p")[1].style.display = "none";
}

function mostrarParrafo() {
    document.getElementsByTagName("p")[1].style.display = "block";
}