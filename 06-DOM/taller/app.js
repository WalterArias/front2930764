fetch("persona.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    // hacer un bucle
    /*  for (let index = 0; index < res.length; index++) {
      const element = res[index];
      console.log(element.apellido);
    } */

    res.forEach((element) => {
      //console.log(element.apellido);
      let card = document.createElement("div");
      card.classList.add("card");
      let imagen = document.createElement("img");
      imagen.setAttribute("src", element.imagen);
      /* console.log(imagen); */
      card.appendChild(imagen);
      let texto = document.createTextNode(element.nombre);
      card.appendChild(texto);
      document.body.appendChild(card);
    });
  });
