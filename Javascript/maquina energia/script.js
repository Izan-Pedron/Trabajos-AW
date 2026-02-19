const maquina = document.getElementById('maquina');
const titulo = document.getElementById('titulo');
const mensaje = document.getElementById('mensaje');

let mensajeExtra = null;

function actualizarEstado(color, tituloTexto, mensajeTexto) {
    maquina.style.backgroundColor = color;
    titulo.textContent = tituloTexto;
    mensaje.textContent = mensajeTexto;
}

function encender() {
    actualizarEstado('green', 'Máquina encendida', 'La máquina está funcionando');
}

function apagar() {
    actualizarEstado('red', 'Máquina apagada', 'La máquina está detenida');
}

function crearMensaje() {
    if (!mensajeExtra) {
        mensajeExtra = document.createElement('p');
        mensajeExtra.textContent = 'Mensaje extra';
        maquina.appendChild(mensajeExtra);
    }
}

function borrarMensaje() {
    if (mensajeExtra) {
        maquina.removeChild(mensajeExtra);
        mensajeExtra = null;
    }
}

