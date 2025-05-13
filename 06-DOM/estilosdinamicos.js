//

let receta = document.querySelector("#receta");

/* let estado = false;

if (estado) {
  receta.style.backgroundColor = "black";
  receta.style.color = "white";
  receta.style.padding = "5px";
} else {
  receta.style.backgroundColor = "red";
  receta.style.color = "yellow";
  receta.style.padding = "5px";
}
  */
/* 
receta.classList.add("especial", "recuadro1");

//receta.classList.toggle("especial");

receta.classList.replace("recuadro1", "recuadro2"); */

let estado = 73;
console.log(estado);

/* if (estado) {
  receta.classList.toggle("especial");
} else {
  receta.classList.toggle("especial2");
}
 */

// OJO LA CONDICION PARA RENDERIZAR DEBE SER UN VALOR BOOLEANO

receta.classList.toggle("especial", estado);
