fetch("https://gorest.co.in/public/v1/users/3532/posts")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
const element = document.querySelector('#fetch')

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'

    },
    body: JSON.stringify({
        title: 'Fetch POST Request Example',
        body: ' this is me'
    })
};
fetch('https://reqres.in/api/articles', requestOptions)
    .then(response => response.json())
    .then(data => element.innerHTML = data.body)


// const element = document.querySelector('#fetch')

// const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 68c1bd8546620b512cced683384cf7402c7a1c68975016f69e8415335217edbb'

//     },
//     body: JSON.stringify({
//         title: 'Fetch POST Request Example',
//         body: 'this is me',
//     })
// };
// fetch("https://gorest.co.in/public/v1/users/3532/posts")
//     .then((response) => response.json())
//     .then((data) => {
//         let san = data.data
//         san.map((j) => {
//             element.innerHTML += `<h2>This is my title: ${j.title}</h2>
//                             <body>This is my Body: ${j.text}</body>`


//         })
//     })


// fetch("https://gorest.co.in/public/v1/users/3532/posts")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
// const element = document.querySelector('#fetch')

// const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'

//     },
//     body: JSON.stringify({
//         title: 'Fetch POST Request Example',
//         body: ' this is me'
//     })
// };
// fetch("https://gorest.co.in/public/v1/users/3532/comments")
//     .then(response => response.json())
//     .then(data => element.innerHTML = data.body)