// let miprimeraimagen = document.querySelector("#miprimeraimagen");

// console.log(miprimeraimagen.getAttribute("src"));
// console.log(miprimeraimagen.getAttribute("alt"));
// console.log(miprimeraimagen.getAttribute("id"));

let ejemplo= document.querySelector("#ejemplo");
let numero = 2;//imagen que cambia

if(numero == 1 ){
    //recibe dos parametros el nombre del atributo y su valor a agregar
ejemplo.setAttribute("src","48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp");
}
if(numero == 2)
{
    ejemplo.setAttribute("src","images.jpg");
}