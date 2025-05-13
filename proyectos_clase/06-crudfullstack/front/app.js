document.addEventListener("DOMContentLoaded", leerApi);
const url = "http://localhost:3000/aprendices";
const btnEnviar = document.querySelector("#btnEnviar");
function leerApi() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

btnEnviar.addEventListener("click", () => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: "252",
      nombre: "walt",
      apellido: "arias",
      estaMatriculado: true,
      email: "wal@gmail.com",
    }),
    headers: {
      "Content-Type": "application/json", // tipo de carga o payload que envio en el request
    },
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      console.log(res);
    });
});
