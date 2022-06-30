// Carrito
let iconoCarrito = document.querySelector("#cart-icon");
let carrito = document.querySelector(".carrito");
let cerrarCarrito = document.querySelector("#close-cart");

//Abrir carrito
iconoCarrito.addEventListener("click", () => {
    carrito.classList.add("active");
});
//Cerrar carrito
cerrarCarrito.addEventListener("click", () => {
    carrito.classList.remove("active");
});

//carro funcional
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready()
};

//funciones
function ready (){
    //Quitar items del carrito
    let quitarBotonDeCarrito = document.getElementsByClassName("cart-remove")
    for(let i = 0; i < quitarBotonDeCarrito.length; i++){
        let boton = quitarBotonDeCarrito[i];
        boton.addEventListener("click", quitarProductoDeCarrito)
    }
    // Cambio de cantidades de unidades
    let cantidadInputs = document.getElementsByClassName("cantidad-de-productos");
    for(let i = 0; i < cantidadInputs.length; i++){
        let input = cantidadInputs[i]

        input.addEventListener("change", cantidadCambiada);
    }
    //Agregar al carrito
    let agregarAlCarrito = document.getElementsByClassName("add-cart")
    for(let i = 0; i < agregarAlCarrito.length; i++){
        let boton = agregarAlCarrito[i]
        boton.addEventListener("click", clickAgregar);
    }
    //Boton de comprar funcional
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", botonComprarClickeado);

};
//Boton de comprar
function botonComprarClickeado(){
    alert("Tu orden ha sido enviada!");
    let productosEnCarrito = document.getElementsByClassName("contenido-en-carrito")[0];
    while (productosEnCarrito.hasChildNodes()){
        productosEnCarrito.removeChild(productosEnCarrito.firstChild);
    }
    mostrarTotal();
}

//funcion quitar producto del carrito

function quitarProductoDeCarrito(event){
    let botonClickeado = event.target;
    botonClickeado.parentElement.remove();
    mostrarTotal();
};




//Cantidad Cambiada
function cantidadCambiada(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    mostrarTotal()
};


//Producto agregado al carrito
function clickAgregar(event){
    let boton = event.target
    let productosTienda = boton.parentElement
    let tituloProducto = productosTienda.getElementsByClassName("titulo-producto")[0].innerText;
    let precio = productosTienda.getElementsByClassName("precio")[0].innerText;
    let imagenDeProducto = productosTienda.getElementsByClassName("imagen-producto")[0].src;
    agregarProductosAlCarrito(tituloProducto, precio, imagenDeProducto);
    mostrarTotal();
}
//funcion agregar productos al carrito y productos ya agregados
function agregarProductosAlCarrito(tituloProducto, precio, imagenDeProducto){
    let carritoConProductos = document.createElement("div");
    carritoConProductos.classList.add("box-de-carrito");
    let itemsDeCarrito = document.getElementsByClassName("contenido-en-carrito")[0];
    let nombresDeItems = itemsDeCarrito.getElementsByClassName("titulo-producto-en-carrito");
    for(let i = 0; i < nombresDeItems.length; i++){
        if (nombresDeItems[i].innerText == tituloProducto){
        alert ("Ya agregaste este producto al carrito");
        return;
        }
    }

    let contenidoBoxDeCarrito = `
                                <img src="${imagenDeProducto}" alt="#" class="imagen-carrito">
                                <div class="detalle">
                                    <div class="titulo-producto-en-carrito">${tituloProducto}</div>
                                    <div class="precio-carrito">${precio}</div>
                                    <input type="number" value="1" class="cantidad-de-productos">
                                </div>
                                    <!-- Eliminar productos del carrito -->
                                    <i class="bx bxs-trash-alt cart-remove"></i>
                            `;
                                
    carritoConProductos.innerHTML = contenidoBoxDeCarrito;
    itemsDeCarrito.append(carritoConProductos);
    carritoConProductos.getElementsByClassName("cart-remove")[0].addEventListener("click", quitarProductoDeCarrito);
    carritoConProductos.getElementsByClassName("cantidad-de-productos")[0].addEventListener("changue", cantidadCambiada);
                                
};
//Actualizar total
function mostrarTotal(){
    let prodsEnCarrito = document.getElementsByClassName("contenido-en-carrito")[0];
    let boxesDeCarrito = prodsEnCarrito.getElementsByClassName("box-de-carrito");
    let total = 0
    for(let i = 0; i < boxesDeCarrito.length; i++){
        let boxDeCarrito = boxesDeCarrito[i]; 
        let precioDeProducto = boxDeCarrito.getElementsByClassName("precio-carrito")[0];
        let cantidadDeProductos = boxDeCarrito.getElementsByClassName("cantidad-de-productos")[0];
        let precio = parseFloat(precioDeProducto.innerText.replace("$", ""));
        let cantidad = cantidadDeProductos.value;
        total = total + (precio * cantidad);
    }
        document.getElementsByClassName("total-precio")[0].innerText = "$" + total;
};

