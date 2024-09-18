//Ejercicio 4 if... else...
let numero = Number(prompt("Ingrese un número"))

if (numero % 2 == 0){
    alert ("Su número es par")
}else if (!numero % 2 == 0){
    alert("Su número es impar")
}else{
    alert("El cero no está incluido en el programa")
}


//Ejercicio 4 Operador condicional... 
let programa = numero % 2 == 0 ? "Su número es par" : "Su número es impar"


function numeroDeterminar (numeroU){
    numeroU = Number(prompt("Ingrese un número"))
    return numeroU % 2 == 0 ? "Su número es par" : "Su número es impar"
}
let numeroResultante = numeroDeterminar
console.log (numeroResultante)




let numeroResultante2 = uNumero => uNumero % 2 == 0 ? "Su número es par" : "Su número es impar"
console.log(numeroResultante2(Number(prompt("Ingrese un número"))))