//Ejercicio 8 Declaración Switch...

let mensualidad = Number(prompt("Ingrese tu plan de mensualidad, 1. 15 días, 2. 30 días, 3. 90 días"))
let pagoMen = Number(prompt("Ingresa el número de días que quieras pagar"))
let totalACancelar = 0

switch (mensualidad) {
    case 1: 
    totalACancelar = pagoMen / 15 * 18000   
        break;
    case 2: 
    totalACancelar = pagoMen / 30 * 35000
        break;
    case 3: 
    totalACancelar = pagoMen / 90 * 860007
        break;
    default: 
    alert ("OPCION INVALIDA")
    break;
} 
alert(`Tu total a pagar es ${totalACancelar}`)