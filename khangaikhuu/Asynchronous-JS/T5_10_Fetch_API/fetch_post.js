fetch('https://gorest.co.in/public/v1/users/3519/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

const requestOptions = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 7987988109e9813edb967b35d8b980a09015ed1f3d9bc44f3e90c5e8e97136ed'},
  body: JSON.stringify({title: "My Post from Fetch", body:"Fetch POST example POST" })
}

fetch('https://gorest.co.in/public/v1/users/3519/posts', requestOptions)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

