const url = "https://api.escuelajs.co/api/v1/prodducts";

document.addEventListener("DOMContentLoaded", leerApi);

async function obtenerData() {
  const resultado = await fetch(url);
  const datos = await resultado.json();
  console.log(datos);
}

function leerApi() {
  try {
    obtenerData();
  } catch (e) {
    //let errorObj = JSON.parse(error); 
    console.log(e.error);
  }
}
