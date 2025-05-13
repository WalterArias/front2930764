//conversion de eleemntos html en objetos JS
let miTabla= document.querySelector("#miTabla");
let cuerpo = document.querySelector("#cuerpo");
let fila1= document.querySelector("#fila1");
let fila2Columna3= document.querySelector("#fila2Columna3");

//traversing = herramientas que da el dom para recorrer los elementos 

//mostrar elementos hijos por consola 
console.log(miTabla.children);
console.log(cuerpo.children);
console.log(cuerpo.children[1].cells[0].innerText); //para mostrar el texto que hay en ese cambio especifico
cuerpo.children[1].cells[0].innerText = "HOLA";
//console.log(cuerpo.children[1].innerHTML);


//ELEMENTOS HIJOS 2
// se refiere a nodos
console.log(cuerpo.firstChild);
console.log(cuerpo.lastChild);

//se refiere a elementos o element
console.log(cuerpo.firstElementChild);
console.log(cuerpo.lastElementChild);

// se refiere a nodos
console.log(fila1.firstChild);
console.log(fila1.lastChild);

//se refiere a elementos o element
console.log(fila1.firstElementChild.innerHTML);
console.log(fila1.lastElementChild.innerHTML);

let columna = document.querySelector("#Columna");

console.log(columna.previousElementSibling.innerHTML);
console.log(columna.nextElementSibling.innerHTML);

console.log(columna.previousSibling);
console.log(columna.nextSibling);

columna.previousElementSibling.innerHTML= "QUE MAS???";

fila1.cells[2].innerHTML = "HECHO DE OTRA MANERA!";