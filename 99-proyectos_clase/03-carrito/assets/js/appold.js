const listaproductos = document.querySelector("#lista-productos");

let articulosCarrito = [];

// funcion que carga los eventos de la pagina
const cargarEventos = () => {
  listaproductos.addEventListener("click", seleccionarProducto);
};

const seleccionarProducto = (e) => {
  // bubbling de eventos
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    //traversing
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerDatosProducto(productoSeleccionado);
  }
};

const leerDatosProducto = (datos) => {
  //crear un objeto con los valorers

  const productosObj = {
    nombre: datos.querySelector("h5").textContent,
    precio: datos.querySelector("p").textContent,
    imagen: datos.querySelector("img").src,
  };

  console.log(productosObj);
};

cargarEventos();

/*
const listaproductos = document.querySelector("#lista-productos");
const carrito = document.querySelector("#lista-carrito tbody");

let articulosCarrito = [];

// funcion que carga los eventos de la pagina
const cargarEventos = () => {
  listaproductos.addEventListener("click", seleccionarProducto);
};

const seleccionarProducto = (e) => {
  // bubbling de eventos
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    //traversing
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerDatosProducto(productoSeleccionado);
  }
};

const leerDatosProducto = (datos) => {
  //crear un objeto con los valorers

  const productosObj = {
    nombre: datos.querySelector("h5").textContent,
    precio: datos.querySelector("p").textContent,
    imagen: datos.querySelector("img").src,
  };

  console.log(productosObj);

  //agregar al carro

  articulosCarrito.push(productosObj);
  llenarCarritoHtml();
};

const llenarCarritoHtml = () => {
  limpiarCarrito();
  articulosCarrito.forEach((producto) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td> <img src= ${producto.imagen} width="40"></td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>    
    `;
    carrito.appendChild(tr);
  });
};

const limpiarCarrito = () => {
  carrito.innerHTML = "";
};

cargarEventos();




*/
