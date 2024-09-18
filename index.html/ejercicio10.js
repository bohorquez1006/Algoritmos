let copiaImprimir = Number(prompt("Ingrese el número de copias que desea sacar."))
let precioCopia = 0

if (copiaImprimir >0 && copiaImprimir <=499){
    precioCopia = 120
}else if (copiaImprimir >500 && copiaImprimir<749){
    precioCopia = 100
}else if (copiaImprimir >750 && copiaImprimir<999){
    precioCopia = 80
}else{
    copiaImprimir = 50
}