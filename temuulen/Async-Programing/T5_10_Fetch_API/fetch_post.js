// fetch('https://gorest.co.in/public/v1/users/3523/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         const posts = data.data;
//         for( i = 0; i < posts.length; i++ ) {
//             document.getElementById("posts").innerHTML += `
//             <li>Title: ${posts[i].title}</li>
//             <li>Body: ${posts[i].body}</li>`
//         }
//     })


// const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 1257a1bf4ad81fb1eccc71349cc74ea71c81d523a3338741ba4ab2db6c49c45a'
//     },
//     body: JSON.stringify({ title: 'My Post from Fetch', body: 'Fetch POST Request Example'})
// };


bodyPut = {
    name: 'ihihiihihhhhh',
    email: 'ihihih@whahah.mn'
}

const requestOptionsChange = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1257a1bf4ad81fb1eccc71349cc74ea71c81d523a3338741ba4ab2db6c49c45a'
    },
    body: JSON.stringify(bodyPut)
};


fetch('https://gorest.co.in/public/v1/users/3523', requestOptionsChange)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });