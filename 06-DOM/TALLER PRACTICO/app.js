const fila = document.querySelector("#fila");

//fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
fetch("https://jsonplaceholder.typicode.com/photos/")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.forEach((datos) => {
      let valor = true;
      let col = document.createElement("div");
      col.classList.add("col");
      let capa = document.createElement("div");
      capa.classList.add("card");
      capa.style.width = "18rem";
      let imagen = document.createElement("img");
      imagen.setAttribute("src", datos.thumbnailUrl);
      imagen.classList.add("card-img-top");
      let title = document.createElement("span");
      let txt = document.createTextNode(datos.id);
      if (valor) {
        title.classList.add("badge", "bg-success");
      } else {
        title.classList.add("badge", "bg-danger");
      }
      title.appendChild(txt);
      // title.classList.add("badge bg-secondary");
      let body = document.createTextNode(datos.title);
      capa.appendChild(title);
      capa.appendChild(imagen);
      capa.appendChild(body);
      col.appendChild(capa);
      fila.appendChild(col);
    });
  });
