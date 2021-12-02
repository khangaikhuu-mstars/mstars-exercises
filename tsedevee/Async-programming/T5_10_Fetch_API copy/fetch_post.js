fetch('https://gorest.co.in/public/v1/users/3572/posts')
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        console.log(data);
        const posts = data.data;
        console.log(posts.length)
         for(i = 0; i < posts.length; i++){
             console.log(posts[i])
             document.getElementById("fetch").innerHTML += `<li> ${posts[i].title} </li>`;
         }
        })

const requestOptions = {
    method: "POST" ,
    headers: { 'Content-Type': 'application/json',
    'Authorization': 'Bearer 61f692055532d2684b511478685255ca12dab54d7de0589f4dda7dbd05a4cb6e'},
    body: JSON.stringify({title: "MY Post from Fetch", body:"Fetch POST example POST"})
};
// fetch('https://gorest.co.in/public/v1/users/3572/posts', requestOptions)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });


