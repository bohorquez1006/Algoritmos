let sandiwich = Number (prompt("QUE TAMAÑO DE SANDWICH DESEAS : 1. GRANDE, 2. PEQUEÑO"))
let adicionales1 = Number (prompt("¿QUIERES AGREGAR ADICIONAL DE JALAPEÑO? : 1. SI, 2. NO"))
let adicionales2 = Number (prompt("¿QUIERES AGREGAR ADICIONAL DE TOCINETA? : 1. SI, 2. NO"))
let adicionales3 = Number (prompt("¿QUIERES AGREGAR ADICIONAL DE PAVO? : 1. SI, 2. NO"))
let adicionales4 = Number (prompt("¿QUIERES AGREGAR ADECIONAL DE QUESO? : 1. SI, 2. NO"))
let pequeño = 6000
let grande = 12000
let jalapeño = 0
let tocineta = 3000
let pavo = 3000
let queso = 2500
let totalP = 0
let sumaPedido = 0

if(sandiwich = 1){
    totalP += grande
}else{
    totalP += pequeño
}if (adicionales1){
    totalP += jalapeño
}if (adicionales2){
    totalP += tocineta
}if (adicionales3){
    totalP += pavo
}if (adicionales4){
    totalP += queso
}
alert (`El valor a cancelar es ${  total}`)