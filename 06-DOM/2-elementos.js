//DOM
let miprimeraimagen = document.getElementById("miprimeraimagen");
let ulpapa= document.getElementById("ulpapa");
let ulhijo= document.getElementById("ulhijo");
//propiedades delos elementos

console.log(miprimeraimagen.id);
console.log(miprimeraimagen.clientHeight, miprimeraimagen.clientWidth);
console.log(ulpapa.childElementCount);//hace un conteo  de los elementos html que estan dentro del ul o al que se lo asigne
console.log(ulhijo.childElementCount);
console.log(ulpapa.childNodes);//hace un arreglo de todos los elementos(nodos) que estan dentro del ul o al que se lo asigne
console.log(ulhijo.childNodes);
console.log(ulpapa.firstChild);//
console.log(ulpapa.firstElementChild);//
console.log(ulpapa.lastElementChildElementChild);//muestra el tipo del ultimo elemento html 
console.log(ulpapa.lastChild);//muestra el tipo del ultimo nodo 