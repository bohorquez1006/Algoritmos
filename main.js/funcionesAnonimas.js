const obtenerSaludo = function (nombre){
    return `Hola ${nombre}, bienvenido a desarrollo útil`
};

const imprimirSaludo = function (mensaje){
    console.log(mensaje)
};

const alertSaludo = function (mensaje){
    alert(mensaje)
};

const saludar = function (obtener, imprimir) {
    const saludo = obtener("Pablo")
    imprimir (saludo)
};

saludar(obtenerSaludo, imprimirSaludo);
saludar(obtenerSaludo, alertSaludo); 