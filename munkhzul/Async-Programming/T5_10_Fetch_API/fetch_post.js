fetch('https://gorest.co.in/public/v1/users/3569/posts')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    let posts = data.data;
     posts.map((datas) => {
            let ul = document.getElementById("list");
            ul.innerHTML += `<li> ${datas.body} 
                                  ${datas.id} 
                                  ${datas.title} 
                                  ${datas.name}
                                  ${datas.user_id} </li>`
      })
})

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
               'Authorization': 'Bearer faeef344894288401f95144eb46308441f0f9dc1e2fb34ab38fa4671f96b6c9a' 
             },
    body: JSON.stringify({ 
        title: 'Fetch POST Request Example', 
        body: 'Fetch post example' ,
        name: 'Tester3'
    })
}

fetch('https://gorest.co.in/public/v1/users/3569/posts', requestOptions)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
