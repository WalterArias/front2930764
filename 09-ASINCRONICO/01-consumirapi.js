// nota: usaremos esta api gratuita para practicar: https://jsonplaceholder.typicode.com/
// https://reqres.in/
// https://pokeapi.co/

//metodo get : obtener un recurso

// API DE JAVASCRIPT :: FETCH => PROMESAS
const cuerpo = document.querySelector("#cuerpo");
const api =
  "https://superheroapi.com/api/21224ad2542e61033fe3b6a3b923ca00/69/appearance";

fetch(api, {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((response) => response.json()) //promesa de parseo o serializacion
  .then((datos) => {
    console.log(datos);
  }) // promesa con la accion a desarrollar con el recurso
  .catch((e) => {
    console.log(e);
  }); // promesa que se dispara con un error
