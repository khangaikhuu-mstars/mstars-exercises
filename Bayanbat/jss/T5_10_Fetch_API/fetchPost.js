fetch('https://gorest.co.in/public/v1/users/3527/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const i = data.data
        i.map((d) => document.querySelector('#fetch').innerHTML += `<ul><li>${d.title}</li><li>${d.body}</li></ul>`)
    });
const requestOptions = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 402b2909a021323f00665b5ea2b9e2f6745b3b0b6157c28f193d5f4901ba15cd'
    },

    body: JSON.stringify({
        title: 'Fetch POST Request Example'
    })
};
fetch('https://reqres.in/api/articles', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));