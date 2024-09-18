//Ejercicio 3 operadora condional... 

let tipoLavadora = prompt("Ingrese el tipo de lavadora. 1.grande. 2.pequeña")
let numeroLavadoras = Number ("ingrese el número de lavadoras que desea alquilar")
let horas = Number(prompt("Ingrese el número de horas que desea alquilar la lavadora"))
let grande = lavadoraGrande
let pequeña = lavadoraPeque
let lavadoraGrande = 4000 * horas


let lavadoraPeque= (horas) => {
let total = horas * 4000
return total
} 
let calcularCostoTotal

let valor = grande ? lavadoraGrande : lavadoraPequealert (`Señor usuario el valor de l servicio es ${valor}`)


