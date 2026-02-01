function cambiarTexto() {
            var parrafo = document.getElementById("texto");
            parrafo.textContent = "El texto ha sido cambiado mágicamente.";
        }

        function cambiarColor() {
            const caja = document.getElementById("caja");
            caja.style.backgroundColor = "lightblue";
        }

        function crearParrafo() {
            var parrafo = document.getElementById("caja");

            var nuevoparrafo = document.createElement("p");
            nuevoparrafo.textContent = "Nuevo párrafo añadido de manera dinamica.";
            
            caja.appendChild(nuevoparrafo);
        }

        function borrarParrafo() {
            var caja = document.getElementById("caja");
            var parrafos = caja.getElementsByTagName("p");

            if (parrafos.length > 1) {
                caja.removeChild(caja.lastElementChild);
            }
        }

        function cambiarTitulo() {
            var parrafo = document.getElementById("titulo");
            parrafo.textContent = "El titulo ha sido cambiado mágicamente.";
        }
