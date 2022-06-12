

const stockTienda = [
    {
        "nombre":"Celular Samsung S22",
        "precio":90.000,
        "stock":10
    },
    {
        "nombre":"Heladera Ciclica Patrick",
        "precio":74.000,
        "stock":5
    },
    {
        "nombre":"Smart TV 4k LG",
        "precio":107.000,
        "stock":8
    },
    {
        "nombre":"Microondas Digital Eco 20 Lts BGH",
        "precio":24.000,
        "stock":15
    },
    {
        "nombre":"Lavarropas Carga Frontal 8kg 1200 RPM DREAN",
        "precio":88.000,
        "stock":3
    }, 
    {
        "nombre":"Tablet Lenovo M10 10,1 pulgadas 64 gb",
        "precio":33.000,
        "stock":20
    },
];

let total = 0;




const carrito = [];
const producto = prompt("Bienvenido a nuestra tienda digital! ¿qué producto deseas comprar? (Celular, Heladera, TV, Lavarropas, Microondas, Computadora)");

carrito.push(producto);

while (confirm("¿Deseas agregar otro producto a tu carrito de compras?")) {
    const producto = prompt("¿qué otro producto deseas comprar? (Celular, Heladera, TV, Lavarropas, Microondas, Computadora) Si no desea comprar mas haga click en Cancelar =)")
    carrito.push(producto)
};

alert("Felicidades! Has adquirido los siguientes productos:")
carrito.forEach ((producto) => alert(producto));




