const apiPost = "https://reqres.in/api/users/2";

fetch(apiPost, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
