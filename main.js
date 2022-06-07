
let respuesta = 'si'

while(respuesta.toLowerCase() === 'si') {
    const servicio = prompt("Ingrese el servicio que desea suscribirse: Netflix, Amazon prime, HBO");
    let tiempo = Number(prompt("Ingrese numero de meses que desea estar suscrito: 1 mes, 3 meses, 12 meses"));
    let pantallas = Number(prompt("Ingrese numero de pantallas que va a utilizar para el servicio: 1, 2, 4"));
    let personas = Number(prompt("Ingrese numero de personas que van a utilizar el servicio: 1, 2, 4"));

    const costoServicio = calcularCosto(tiempo, pantallas, personas);

    if (costoServicio >= 4000) {
        alert("Felicidades! adquiriste "+ servicio + " premium " + "por un precio de " + costoServicio)
    } else {
        alert("Felicidades! adquiriste " + servicio + " basico " + " por un precio de " + costoServicio)
    }

    respuesta = prompt('¿Deseas adquirir otro servicio?');
}

function calcularCosto(tiempo, pantallas, personas) {
    let costoServicio = ((tiempo, pantallas, personas) * 1500)
    return costoServicio ;
}
