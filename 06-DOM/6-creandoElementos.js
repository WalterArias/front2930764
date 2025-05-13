//creando elementos basico titulo

//creamos el elemento

let titulo = document.createElement("h1");
let texto = document.createTextNode("Welcome to DOM 2025");

//agregar al nodo :::: recuerda la jerarquia del DOM
titulo.appendChild(texto);
document.body.appendChild(titulo);

//agregar nodo:::parrafo

let parrafo = document.createElement("p");
let textoParrafo = document.createTextNode("tttttttttttttttaaaaaaaaaaaaaaggggggggggggggdddddddddd");

parrafo.appendChild(textoParrafo);
document.body.appendChild(parrafo);