// Ejercicio 2. if...else if...else
let numero = Number(pront("Ingrese un número"))
if (numero > 0){
    alert("El número es positivo");
} else if (numero < 0) {
    alert("El número es negativo");
}else{
    alert ("El 0 no tiene ningún signo");
}

//Ejercicio 2 switch...
switch (numero){
   case 1: (numero > 0);
    alert("El número es positivo");
    break;
   case 2: (numero < 0);
    alert("Su número es negativo");
    break;
   default:
   alert ("El cero(0) no tiene signo")
}    



function determinarNumero (a, b) {
    let a = Number(prompt("Ingrese un número"))
    let b = Number(prompt("Ingrese otro número"))
    return a + b > 0 ? "El número es positivo" : "El número es negativo"
}
let resultado = determinarNumero
console.log (resultado)



let determinarNumero2 = (a, b) => a + b > 0 ? "El número es positivo" : "El número es negativo" 
console.log (determinarNumero2(Number(prompt("Ingrese un número"),(prompt("Ingrese otro número")) )
))