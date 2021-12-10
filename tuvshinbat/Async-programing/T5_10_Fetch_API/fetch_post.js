// /*
// https://gorest.co.in/rest-console gesen site ashigalj get post hiij uzlee
// get ni huselt yvuuldag bol post ni ni comment bichih FB post hiideg shig hereglegch talaas ymar negen ym upload oruulna
// */



// fetch("https://gorest.co.in/public/v1/users/3567/posts")
//     .then((response) => {
//         console.log(response.json)

//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })


const element = document.querySelector('#ajax')
const requestOptions = {
    method: "POST",
    headers: {
        'Content-type': 'application/json',
        "Authorization": "Bearer 273d9705a351a8bc9e1cf34ac926260f50f4cfef6207db13e429258f2e0d1e7d"
    },
    body: JSON.stringify({
        title: 'Fetch POST request example',
        body: "za ym ogloo"
    })


}



// fetch('https://gorest.co.in/public/v1/users/3567/posts')


//     .then(response => response.json())
//     .then(data => {

//         const posts = data.data
//         posts.map(one => {


//             element.innerHTML += `<h2>${one.id}</h2>`
//             element.innerHTML += `<p>${one.title}</p>`
//             element.innerHTML += `<p>${one.body}</p>`
//             element.innerHTML += `<p>${one.user_id}</p>`
//         })

//     });





const reqeust_bold = {
    method: "POST",
    headers: {
        'Content-type': 'application/json',
        'Authorization': "Bearer 273d9705a351a8bc9e1cf34ac926260f50f4cfef6207db13e429258f2e0d1e7d"
    },
    body: JSON.stringify({
        title: "fetch post tahiad yvuulaa",
        body: "za tahiad post yvuullaa shuu",
    })

}

fetch("https://gorest.co.in/public/v1/users/3567/posts", )
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })



const davdalt = document.getElementById("fetch");
fetch('https://gorest.co.in/public/v1/users/3567/posts')
    .then((response) =>
        response.json())
    .then((data) => {
        const next = data.data
        console.log(next)
        next.map(two => {
            davdalt.innerHTML += `<h2>${two.id}</h2>`
            davdalt.innerHTML += `<p>${two.title}</p>`
            davdalt.innerHTML += `<p>${two.body}</p>`
            davdalt.innerHTML += `<p>${two.user_id}</p>`

        })
})
