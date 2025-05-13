const listaproductos = document.querySelector("#lista-productos");
const carritoItems = document.querySelector("#lista-carrito tbody");

let articulosCarrito = [];
// funcion que carga los eventos de la pagina
const cargarEventos = () => {
  listaproductos.addEventListener("click", seleccionarProducto);
  //eliminar elementos del carrito
  carritoItems.addEventListener("click", eliminarProducto);
};

const eliminarProducto = (e) => {
  if (e.target.classList.contains("eliminar-item")) {
    let id = e.target.parentElement.previousElementSibling.innerText;
    console.log(id);
    //const cursoId = e.target.getAttribute('data-id')

    console.log(articulosCarrito);
    articulosCarrito = articulosCarrito.filter(
      (articulo) => articulo.codigo !== id
    );
    llenarCarritoHTML();
  }
};

const seleccionarProducto = (e) => {
  // bubbling de eventos
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    //traversing
    const productoSeleccionado = e.target.parentElement.parentElement;
    console.log(productoSeleccionado);
    leerDatosProducto(productoSeleccionado);
  }
};

const leerDatosProducto = (datos) => {
  //crear un objeto con los valores
  const productosObj = {
    nombre: datos.querySelector("h5").textContent,
    precio: datos.querySelector("p").textContent,
    imagen: datos.querySelector("img").src,
    codigo: datos.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  articulosCarrito.push(productosObj);
  llenarCarritoHTML();
};

const llenarCarritoHTML = () => {
  limpiarCarrito();
  articulosCarrito.forEach((articulo) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td> <img src= ${articulo.imagen} width="30"></td>
    <td>${articulo.nombre}</td>
    <td>${articulo.precio}</td>
    <td>${articulo.cantidad}</td>    
    <td>${articulo.codigo}</td>   
    <td>   <a href="#" class="btn btn-danger eliminar-item"> x </a></td>
    `;
    carritoItems.appendChild(tr);
  });
};

// metodo para limpiar carrito

const limpiarCarrito = () => {
  carritoItems.innerHTML = "";
};

cargarEventos();
