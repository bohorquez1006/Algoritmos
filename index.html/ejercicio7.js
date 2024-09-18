//Ejercicio 7 if...else...

let genero = prompt ("Ingrese su genero")

if (genero = "mujer"){
    
    let edad = Number(prompt("Ingrese su edad"))
    if (genero === "mujer" && (edad >= 50)){
        alert("Su ayuda del gobierno será de 120000")
    } if (genero === "mujer" && edad >= 30 && edad >=50){
        alert("Su ayuda del gobierno será de 100000")
    }
}else {
    alert("Su ayuda del gobierno será de 40000")
}