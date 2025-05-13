// capturamos elementos con el DOM

let formulario = document.querySelector("#formulario");
let resultado = document.querySelector("#resultado");

// funciones y eventos
window.addEventListener("load", () => {
  //console.log("pagina cargada");
  formulario.addEventListener("submit", consultarTiempo);
});

// single responsability   :: PRINCIPIOS SOLID DE PROGRAMACION
function consultarTiempo(e) {
  e.preventDefault(); // previene el envio automatico del evento submit
  //console.log(e.target);
  let ciudad = document.querySelector("#ciudad").value;
  let pais = document.querySelector("#pais").value;
  if (ciudad == "" || pais == "") {
    // console.log("debe llenar los datos");  // funcion muestre errores
    mostrarError("debe llenar todos los datos");
    return; // rompe el flujo y para la ejecucion
  }
  leerApi(ciudad, pais);
}

function mostrarError(error) {
  resultado.classList.add(
    "bg",
    "bg-danger",
    "p-2",
    "rounded",
    "text-white",
    "fs-2",
    "fw-bold"
  );
  resultado.innerHTML = error;
}

function leerApi(ciudad, pais) {
  const apikey = "3a45ddbf30fb94041a299eb3d6b41b0b";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      let temperatura = res.main.temp;
      let humedad = res.main.humidity;
      let pronostico = res.weather[0].main;
      let descripcion = res.weather[0].description;
      let icono = res.weather[0].icon;

      console.log(temperatura);

      if (temperatura >= 25) {
        resultado.classList.add("bg", "bg-danger", "text-white", "fs-3");
        let temp = document.createElement("p");
        temp.innerText = temperatura;
        let humed = document.createElement("p");
        humed.innerText = humedad;
        let icon = document.createElement("img");
        icon.setAttribute(
          "src",
          ` https://openweathermap.org/img/wn/${icono}@2x.png`
        );

        resultado.append(temp);
        resultado.append(humed);
        resultado.append(icon);

        //resultado.innerHTML = res.main.temp;
      } else {
        resultado.classList.add("bg", "bg-info", "text-white", "fs-3");

        let temp = document.createElement("p");
        temp.innerText = temperatura;
        let humed = document.createElement("p");
        humed.innerText = humedad;
        let icon = document.createElement("img");
        icon.setAttribute(
          "src",
          ` https://openweathermap.org/img/wn/${icono}@2x.png`
        );

        resultado.append(temp);
        resultado.append(humed);
        resultado.append(icon);
      }
    });
}
