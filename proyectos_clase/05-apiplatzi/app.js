// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// ejemplo 1: de post

const apiurl = "https://api.escuelajs.co/api/v1/products/";

//objeto javascript
let datos = {
  title: "zapatillas ydyydy hdhhdh",
  price: 1000,
  description: "quest",
  categoryId: 1,
  images: ["https://placehold.co/600x400"],
};
//serializar de objeto JS  a JSON
datos = JSON.stringify(datos);

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
    console.log(res);
  });
