const apiurl = "https://api.escuelajs.co/api/v1/products/";
let formulario = document.querySelector("#formulario");

const obtenerDatos = (e) => {
  e.preventDefault();
  let datos = {
    title: document.querySelector("#title").value,
    price: document.querySelector("#price").value,
    description: document.querySelector("#description").value,
    categoryId: document.querySelector("#categoryId").value,
    images: [document.querySelector("#images").value],
  };
  datos = JSON.stringify(datos);
  insertarProducto(datos);
};

const insertarProducto = (datos) => {

  // api fetch de js ES6 Basada en Promises, usando funciones callback
  fetch(apiurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // tipo de carga o payload que envio en el request
    },
    body: datos,
  })
    .then((res) => res.json()) //serializamos la respuesta
    //accion a realizar con la respuesta
    .then((res) => {
      let id = res.id;
      let mensaje = res.updatedAt;
      mostrarMensajes(id, mensaje);
    })
    .catch((error) => {
      console.log(error);
    });
};

const mostrarMensajes = (id, mensaje) => {
  let div = document.createElement("div");
  div.classList.add(
    "alert",
    "alert-success",
    "alert-dismissible",
    "fade",
    "show",
    "mt-3"
  );
  div.innerText = ` creado exitosamente con id: ${id} fecha:${mensaje}`;
  formulario.appendChild(div);
};

formulario.addEventListener("submit", obtenerDatos);
