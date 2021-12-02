

fetch('https://gorest.co.in/public/v1/users/3568/posts')
.then((response) => {
    return response.json();
})
.then((data) => {

    let posts = data.data
    console.log(data)
    let unOrderList = document.getElementById('newList')
    for(i = 0;i< posts.length;i++){
        unOrderList.innerHTML += `<li> ${posts[i].id} 
           ${posts[i].user_id} 
           ${posts[i].title} 
           ${posts[i].body} </li>`
    }
    console.log(posts);
})


const requestOptions = {
    method: "POST",
    headers: {'Content-Type':'application/json' ,
    'Authorization':'Bearer aa6784046655b7e30c6cd75bc83eafd63e0c94d9280b15b46d8f898511eb74e8' },
    body: JSON.stringify({title: "My new post1", body: "Fetch post example1"})
};

fetch('https://gorest.co.in/public/v1/users/3568/posts', requestOptions)
.then((response) => {
    return response.json();
})
.then((data) => {
    // let unOrderList = document.getElementById('newList')

    console.log(data.data);

    // let post = data.data;

    // unOrderList.innerHTML += `<li> ${post.id} </li>`
    // unOrderList.innerHTML += `<li> ${post.user_id} </li>`
    // unOrderList.innerHTML += `<li> ${post.title} </li>`
    // unOrderList.innerHTML += `<li> ${post.body}</li>`

})



