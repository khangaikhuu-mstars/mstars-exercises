fetch("https://gorest.co.in/public/v1/users/3550/posts")
 .then((response) => {
     return response.json();
 })
 .then((data) => {

     console.log(data.meta.pagination.total);
     console.log(data.data)
     for(i=0; i<data.length; i++){
         
     }
     document.getElementById("fetch").innerHTML = `<li>${data.data[0].title}</li>`
     document.getElementById("fetch").innerHTML += `<li>${data.data[0].body}</li>`
 })



//  const requestOptions = {
//      method: "POST",
//      headers: {
//          'Content-Type': 'application/json',
//          'Authorization': 'Bearer e9ffa2bcc9d263877d01950f89956c26bc08e2fa030497efe8dc258028196ac0'},
//      body: JSON.stringify({title: "My post from fetch", body: "Fetch post example post"})
//  }

//  fetch('https://gorest.co.in/public/v1/users/3550/posts', requestOptions)
//     .then(response => response.json())
//     .then(data => console.log(data));