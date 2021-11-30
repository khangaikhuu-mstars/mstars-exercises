let btn = document.getElementById('button')
const myPromise = new Promise(function(resolve, reject){
    let ajaxRequest = new XMLHttpRequest;
    ajaxRequest.onload = () => {
        if (ajaxRequest.status === 200) {
            return resolve(ajaxRequest.responseText)
        }else{
            return reject('rejected')
        }
    }
    ajaxRequest.open('GET', 'https://gorest.co.in/public/v1/users');
    ajaxRequest.send();
});
console.log(myPromise)
btn.addEventListener('click', ()=>{
    myPromise.then((data)=>{
        var data = JSON.parse(data);
        const people = data.data;
        for(i=0; i<people.length; i++){
            console.log(people[i])
            document.getElementById('ajax').innerHTML += 
            `
            <li><h1>name:${people[i].name}</h1></li>
            <li>id: ${people[i].id}</li>
            <li>email: ${people[i].email}</li>
            <li><h3>gender:<p>${people[i].gender}<p></h3></li>
            <li></li><h3>status:${people[i].status}</h3></li>
            `
        }
    })
   
})


