//import personas from "../public/persona.json";
import logojs from "./assets/img/javascript.svg";

const imagen = document.querySelector("#imagen");
imagen.setAttribute("src", logojs);
const lista = document.querySelector("#lista");

/* personas.forEach((usuario) => {
  const li = document.createElement("li");
  li.textContent = `${usuario.nombre} (${usuario.apellidos})`;
  lista.appendChild(li);
});
 */

fetch("../public/persona.json")
  .then((res) => {
    return res.json();
  })
  .then((usuario) => {
    usuario.forEach((usuario) => {
      const li = document.createElement("li");
      li.textContent = `${usuario.nombre} (${usuario.apellidos})`;
      lista.appendChild(li);
    });
  });
