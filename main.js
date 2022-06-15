
// array de objetos de la tienda
const stockTienda = [
    {
        "id": 1,
        "nombre":"Celular Samsung S22",
        "precio":90000,
        "stock":1
    },
    {
        "id": 2,
        "nombre":"Heladera Ciclica Patrick",
        "precio":74000,
        "stock":1
    },
    {
        "id": 3,
        "nombre":"Smart TV 4k LG",
        "precio":107000,
        "stock":1
    },
    {
        "id": 4,
        "nombre":"Microondas Digital Eco 20 Lts BGH",
        "precio":24000,
        "stock":1
    },
    {
        "id": 5,
        "nombre":"Lavarropas Carga Frontal 8kg 1200 RPM DREAN",
        "precio":88000,
        "stock":1
    }, 
    {
        "id": 6,
        "nombre":"Tablet Lenovo M10 10,1 pulgadas 64 gb",
        "precio":33000,
        "stock":1
    },
];

let total = 0;
const carrito = [];

const eligeProducto = prompt("Bienvenido a nuestra tienda digital! Ingrese el numero del producto que desea comprar (1. Celular, 2.Heladera, 3. Smart TV, 4.Microondas, 5. Lavarropas , 6. Computadora)");


// funcion para mostrar los productos al cliente 
stockTienda.forEach((element)=>{
    //console.log (element)
});



//funcion para agregar productos al carrito
function agregarProductoAlCarrito(id){
    let producto = stockTienda.find(producto => producto.id == id);
    let productoEnElCarrito = carrito.find(producto => producto.id == id);

    if(productoEnElCarrito){
        productoEnElCarrito.stock++;
    }
        else {
            producto.stock = 1;
            carrito.push(producto);
        }

    console.log (carrito);

} 

//funcion para eliminar productos del carrito
const eliminarProductoDelCarrito = (id) => {
    carrito[id].stock--;
}


agregarProductoAlCarrito(eligeProducto);

//funcion calcular total
function calcularTotal(){
    carrito.forEach((producto) => {
        total += producto.stock * producto.precio;
    });
    //console.log (total)

}

