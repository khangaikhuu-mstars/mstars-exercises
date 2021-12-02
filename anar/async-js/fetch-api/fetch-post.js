const fetchDiv = document.getElementById('fetch');
 
fetch('https://gorest.co.in/public/v1/users/3525/posts')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.data);
        data.data.map(i => {
            fetchDiv.innerHTML += `<ul>Post ID: ${i.id}     </ul>`;
            fetchDiv.innerHTML += `<li>User ID: ${i.user_id}</li>`;
        });
    });


const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 4842fc06e49bdcfb6b912f7da2c6b91b5262c96e3239ea4ca69dd340b434c913',
    },
    body: JSON.stringify({
        // name: 'random random',
        // email: 'random@random.random',
        title: 'Fetch Post Request example',
        body: 'FETCH example POST'
    })
}

fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    });