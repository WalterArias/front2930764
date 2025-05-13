let mensaje = document.querySelector("#mensake");

let resultado = false;

if(resultado==false){
    mensaje.setAttribute("class","alert alert-danger");
}
if(resultado==true){
    mensaje.setAttribute("class","alert alert-successr");
}