// con este metodo creamos un recurso en la WEB, API

const apiPost = "https://reqres.in/api/users";

fetch(apiPost, {
  method: "POST",
  body: {
    name: "waroson",
    job: "caleño",
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
