function ponerRojo() {
    document.getElementById("rojo").style.backgroundColor = "red"
    document.getElementById("amarillo").style.backgroundColor = "gray"
    document.getElementById("verde").style.backgroundColor = "gray"
    document.getElementById("titulo").innerHTML = "LUZ ROJA";
}

function ponerVerde () {
    document.getElementById("verde").style.backgroundColor = "green"
    document.getElementById("amarillo").style.backgroundColor = "gray"
    document.getElementById("rojo").style.backgroundColor = "gray"
    document.getElementById("titulo").innerHTML = "LUZ VERDE";
}

function ponerAmarillo () {
    document.getElementById("amarillo").style.backgroundColor = "yellow"
    document.getElementById("verde").style.backgroundColor = "gray"
    document.getElementById("rojo").style.backgroundColor = "gray"
    document.getElementById("titulo").innerHTML = "LUZ AMARILLA";
}

function apagar () {
    document.getElementById("verde").style.backgroundColor = "gray"
    document.getElementById("amarillo").style.backgroundColor = "gray"
    document.getElementById("rojo").style.backgroundColor = "gray"
    document.getElementById("titulo").innerHTML = "Apagar";
}