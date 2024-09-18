//Ejercicio 11 Declaración Switch

let computadora = Number (prompt("QUE PROBLEMA PRESENTA LA COMPUTADORA? 1. Emite pitido al iniciar y el disco duro no gira    2.Si emite un pitido y la unidad no gira    3.Si no emite un pitido y el disco duro no gira    4.si no emite un pitido y el disco duro gira"))

switch (computadora) {
    case 1: 
    alert("La computadora está averiada")
        break;
    case 2: 
    alert("Póngase en contacto con el técnico apoyo")
        break;
    case 3: 
    alert("Verificar contactos de la unidad")
        break;
    case 4: 
    alert ("Compruebe las conexiones de altavoces")
        break;
    default: 
    alert("Traiga la computadora para repararla en la central")
}