//try catch : bloques de codigo protegido
// conexiones de bases de datos, validaciones de ingreso de usuario
// funcionalidades en las cuales se requiera que la aplicacion

console.log(2 + 2);

function validarUsuario() {
  const user = "juaniii";
  const pwd = "1235";
  if (user === "juan" && pwd === "123") {
    console.log("ingreso exitoso !");
  } else {
    throw 64;
    //console.log("error en las credenciales");
  }
}

try {
  validarUsuario();
} catch (error) {
  console.log(`hay un error # ${error}`);
}

console.log(6 + 7);
