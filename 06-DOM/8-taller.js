function cambiar() {
    let titulo = document.querySelector('#titulo');
    titulo.textContent = ('¡Texto cambiado!');
    //titulo.setAttribute = ('style','color : red') ;
    titulo.style.color =("red");
}

function agregar() {
    let div = document.querySelector('#contenedor');
    let titulo1 = document.createElement("p");
    let texto = document.createTextNode("¡Nuevo elemento agregado!");
    titulo1.appendChild(texto);
    div.appendChild(titulo1);
}
function eliminar() {
    let lista = document.querySelector('#tercera');
    let ultimo = lista.lastElementChild;
    lista.removeChild(ultimo);
}
let elemento =1;
function añadir() {
    let lista = document.querySelector('#vacia');
    let numero = document.createElement("li");
    numero.textContent = (`elemento ${elemento++}`)
    lista.appendChild(numero);

}