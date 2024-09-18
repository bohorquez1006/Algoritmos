//Ejercicio 5 length, push, if...else...

let materia = ["fisica","quimica","biologia","matematicas","informatica"]
let nota = []
let fisica = Number(prompt("Ingrese la nota de Fisica"))
nota.push(fisica)
let Quimica = Number(prompt ("Ingrese su nota de Quimica"))
nota.push(quimica)
let Biologia = Number(prompt("Ingrese nu nota de Biologia"))
nota.push(Biologia)
let Matematicas = Number(prompt("Ingrese su nota de Matematicas"))
nota.push(Matematicas)
let informatica = Number(prompt("Ingrese su nota de Informatica"))
nota.push(informatica)

for (let i = 0; i < nota.length; i++){
    alert (`Tu nota ${nota} de la materia ${materia}`)
}   if (nota[i] > 0 && (nota [i] <= 5.99)){
        alert("Tu calificación es mala")
}   else if (nota [i] >6 && (nota [i] <= 8)){
        alert("Tu calificación es buena")
}   else{
    alert("Tu calificación es buena")
}