//forma 1 de importar: importamos todo el modulo y lo renombramos
// usando alias (as)
import * as Matem from "./matematicas.js";

//forma 2 : usamos destructuring e importamos solo lo requerido
//import { restar } from "./matematicas.js";

console.log(Matem.sumar(10, 63));
