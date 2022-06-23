
// array de objetos de la tienda
const stockTienda = [
    {
        "id": 1,
        "nombre":"Celular Samsung S22",
        "precio":1000,
        "img": "./img/Galaxy-s22.jpg",
        "stock": 1
    },
    {
        "id": 2,
        "nombre":"Heladera Ciclica Patrick",
        "precio":1500,
        "img": "./img/Heladera-cyclic.jpg",
        "stock": 1
    },
    {
        "id": 3,
        "nombre":"Smart TV 4k LG",
        "precio":1000,
        "img": "./img/Smart-Tv-LG.jpg",
        "stock": 1
    },
    {
        "id": 4,
        "nombre":"Microondas Digital Eco 20 Lts BGH",
        "precio":1500,
        "img": "./img/Microondas-BGH.jpg",
        "stock": 1
    },
    {
        "id": 5,
        "nombre":"Lavarropas Carga Frontal 8kg 1200 RPM DREAN",
        "precio":1000,
        "img": "./img/Lavarropas-Drean.jpg",
        "stock": 1,
    }, 
    {
        "id": 6,
        "nombre":"Tablet Lenovo M10 10,1 pulgadas 64 gb",
        "precio":1500,
        "img": "./img/Tablet Lenovo M10 10,1 pulgadas 64 gb.jpg",
        "stock": 1
    },
];



let total = 0;
const carrito = [];

// funcion para mostrar los productos al cliente 
function pintarProductos(){
    let tienda = document.getElementById("tienda");
    stockTienda.forEach((e) => {
        let productoEnHTML =`<div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
                                <div class="card text-center" style="width: 18rem;">
                                    <img class="card-img-top" src= "${e.img}" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">"${e.nombre}"</h5>
                                        <p class="card-text">"${e.precio}$"</p>
                                        <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Agregar al carrito</button>
                                    </div>
                                </div>    
                            </div>`
        
    tienda.innerHTML += productoEnHTML
    })
}
pintarProductos();




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
        
        pintarCarrito();
    } 

// funcion para mostrar productos en el carrito
function pintarCarrito(){
    let carritoEnHTML = document.getElementById("carrito");

    html = "";
    carrito.forEach((producto, id) => {
        html += `<div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                        <img class="card-img-top" src= "${producto.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.precio}$</p>
                            <p>Unidades :${producto.stock}</p>
                            <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${producto.stock})">Quitar Del Carrito</button>
                        </div>
                    </div>                      
                </div>`
    })

    carritoEnHTML.innerHTML = html;
    calcularTotal()
}


//funcion calcular total
function calcularTotal(){
    carrito.forEach(producto => {
        total = producto.stock * producto.precio;
    });
}


//funcion para eliminar productos del carrito
const eliminarProductoDelCarrito = (id) => {
    carrito[id].stock--;
    if(carrito[id].stock == 0){
        carrito.splice(id, 1);
    }
    
    pintarCarrito();
    
}

//EVENTOS
const container = document.getElementById("tienda")

container.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-primary")){
        alert("Agregaste un producto al carrito!")
    }
    if(e.target.classList.contains("btn-danger")){
        alert("Eliminaste un producto al carrito!")
    }
})
