// put: usado para actualizar

// con este metodo creamos un recurso en la WEB, API

const apiPost = "https://reqres.in/api/users/2";

fetch(apiPost, {
  method: "PUT",
  body: {
    name: "waroson arias",
    job: "cali campeon",
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
