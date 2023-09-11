
const productos = [
    // Destacados
    {
        id: "cuadro-01",
        titulo: "Tiempos de luz",
        imagen: "../imagenes/cuadro1.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 6600
    },
    {
        id: "cuadro-02",
        titulo: "En Casa",
        imagen: "../imagenes/cuadro2.jpeg",
        categoria: {
            nombre: "Descatados",
            id: "destacados"
        },
        precio: 12000
    },
    {
        id: "cuadro-03",
        titulo: "Sin Titulo",
        imagen: "../imagenes/cuadro3.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 6000
    },
    {
        id: "cuadro-04",
        titulo: "Al fin libre",
        imagen: "../imagenes/cuadro4.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 10000
    },
    {
        id: "cuadro-05",
        titulo: "Eterno camino",
        imagen: "../imagenes/cuadro5white.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 15000
    },
    {
        id: "cuadro-06",
        titulo: "Mirame a los ojos",
        imagen: "../imagenes/cuadro6white.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 7000
    },
    {
        id: "cuadro-09",
        titulo: "Encerrada",
        imagen: "../imagenes/cuadro-rojo9.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 25000
    },
    {
        id: "cuadro-10",
        titulo: "La Hechizada",
        imagen: "../imagenes/cuadro10.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 8000
    },
    {
        id: "cuadro-07",
        titulo: "Recuerdos",
        imagen: "../imagenes/cuadro7white.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "destacados"
        },
        precio: 25000
    },
    // decorativos
    {
        id: "cuadro-15",
        titulo: "Paraiso colorido",
        imagen: "../imagenes/cuadro15deco.jpeg",
        categoria: {
            nombre: "Decorativos",
            id: "decorativos"
        },
        precio: 13000
    },
    {
        id: "cuadro-16",
        titulo: "La cabaña",
        imagen: "../imagenes/cuadro16deco.jpeg",
        categoria: {
            nombre: "Decorativos",
            id: "decorativos"
        },
        precio: 29000
    },
    {
        id: "cuadro-17",
        titulo: "Doble cara",
        imagen: "../imagenes/cuadro17deco.jpeg",
        categoria: {
            nombre: "Decorativos",
            id: "decorativos"
        },
        precio: 17000
    },
    {
        id: "cuadro-18",
        titulo: "Divina mujer",
        imagen: "../imagenes/cuadro18deco.jpeg",
        categoria: {
            nombre: "Decorativos",
            id: "decorativos"
        },
        precio: 11000
    },
    {
        id: "cuadro-08",
        titulo: "Encerrada deco",
        imagen: "../imagenes/cuadro8.jpeg",
        categoria: {
            nombre: "Destacados",
            id: "decorativos"
        },
        precio: 28000
    },
    // Blanco y Negro
    {
        id: "cuadro-11",
        titulo: "El nocturno",
        imagen: "../imagenes/cuadro11white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 29000
    },
    {
        id: "cuadro-12",
        titulo: "Nítido",
        imagen: "../imagenes/cuadro12white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 30000
    },
    {
        id: "cuadro-13",
        titulo: "Bailarina gótica",
        imagen: "../imagenes/cuadro13white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 27000
    },
    {
        id: "cuadro-14",
        titulo: "Barrio luminado",
        imagen: "../imagenes/cuadro14white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 21000
    },
    {
        id: "cuadro-05",
        titulo: "Eterno camino",
        imagen: "../imagenes/cuadro5white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 15000
    },
    {
        id: "cuadro-06",
        titulo: "Mirame a los ojos",
        imagen: "../imagenes/cuadro6white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 7000
    },
    {
        id: "cuadro-07",
        titulo: "Recuerdos",
        imagen: "../imagenes/cuadro7white.jpeg",
        categoria: {
            nombre: "Blanco y Negro",
            id: "blancoNegro"
        },
        precio: 25000
    }
];

// fetch("../js/productos.json")
//     .then(response => response.json())
//     .then(data => {
//         productos = data;
//         cargarProductos(productos);
//     })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}   