let operadores = Number(prompt("1.Claro, 2.Tigo, 3.Movistar"))
let cantMin = Number(prompt("Ingresa el número de minutos internacionales utilizados"))
let cargoFijoTi = 45000
let cargoFijoCl = 30000
let cargoFijoMo = 40000
let total = 0

switch (operadores) {
    case 1:
        total = cargoFijoCl + cantMin * 200 * 30000
        break;
    case 2: 
        total = cargoFijoMo + cantMin * 250 * 40000
        break;
    case 3: 
        total = cargoFijoTi + cantMin * 100 * 45000
        break;
    default: 
    alert("Tú operador no es válido")
}
alert(`El valor a pagar por el servicio es ${total}`)