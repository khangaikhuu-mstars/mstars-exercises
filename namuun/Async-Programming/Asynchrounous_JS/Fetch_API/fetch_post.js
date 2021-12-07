const token = 'Bearer 2e61c68504e01eac6fa6027b5434bc4e67eefd5f378f1c492332339e674f38e1'
const requestOptions = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': token },
    body: JSON.stringify({ title: 'Fetch POST Request Example', body: "Fetch POST example POST" })
};

fetch('https://gorest.co.in/public/v1/users/3529/posts', requestOptions)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const datas = data.data
        datas.map(function (i) {
                document.getElementById("ul").innerHTML += `<li><br>${i.title}</br> <br>${i.body}</br></li>`;
            })
    })



bodyPUT = {
    name: 'Nmn'
}

const requestOptionsForUser = {
    method: 'PUT',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': token },
    body: JSON.stringify(bodyPUT)
};

fetch('https://gorest.co.in/public/v1/users/3529', requestOptionsForUser)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })