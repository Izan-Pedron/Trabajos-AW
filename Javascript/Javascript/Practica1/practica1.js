
let nombre = prompt("Introduce tu nombre:"); 
let nacimiento = prompt("Introduce tu año de nacimiento:");


nacimiento = Number(nacimiento);

let añoActual = new Date().getFullYear(); 
let edad = añoActual - nacimiento;

alert("Hola " + nombre + ", tienes " + edad + " años."); 