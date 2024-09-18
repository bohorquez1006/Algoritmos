//Ejercicio 1 Operador Condicional... 
let horas = Number(prompt("Ingrese el número de horas trabajadas en la semana")) 
let pagoHoras =  horas < 10 ? 30000 : 33000; 
alert(`Señor David el número de horas son ${horas} horas, por lo tanto su salario es ${pagoHoras}`)


function salarioSemanal (){
    let horas = Number(prompt("Ingrese el número de horas trabajadas en la semana"));
    let horasG = 30000;
    let horasP = 33000;
    return horas < 10 ? horasG : horasP;
}
let pagoSemana = salarioSemanal; 
salarioSemanal();