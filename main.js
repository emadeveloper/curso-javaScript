let pedirNumero = Number (prompt ("Ingresa un numero por favor"));

for (let i = 1; i <= 5; i++) {
    let resultado = pedirNumero + i;
    alert(pedirNumero + " + " + i + " = " + resultado)
};

let pedirTexto = (prompt ("Por favor ingresa un texto aqui"));

while (pedirTexto != "ESC" ){
    alert("Has ingresado "+ pedirTexto);
    pedirTexto = prompt("Ingresa otro texto para continuar...psst! ESC ;)");
};

/*let numero = Number (prompt ("Escribi un numero "));
do{
    numero = 
}*/
