
const element = document.querySelector('#fetch')
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer c73cd34e55f4128c34fb54026a4b748a545500003717f9c8a09492ab73c2abef'},
    body: JSON.stringify({title: 'This is my title', body: `hoho`}),
};
fetch('https://gorest.co.in/public/v1/users/3534/posts')
.then(response=>response.json())
.then(data =>{
    let popo =data.data
    popo.map((obj)=>{element.innerHTML+=`<ul>${obj.title}</ul>
    <li>${obj.body}</li>`})
    })
    
