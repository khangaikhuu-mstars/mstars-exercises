fetch("https://gorest.co.in/public/v1/users/3526/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const omg = data.data;
    omg.map((i) => {
      document.getElementById(
        "fetch"
      ).innerHTML += `<ul><li>${i.title}</li><li>${i.body}</li></ul>`;
    });
  });

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 07c91058b2e8c743a6f4ba74d6baeeccc3b510a643cdb87907570e289f0e6fc1",
  },
  body: JSON.stringify({
    title: "My POST from FETCH",
    body: "Fetch POST example POST",
  }),
};
// fetch("https://gorest.co.in/public/v1/users/3526/posts", requestOptions)
//   .then((response) => response.json())
//   .then((data) => {});
