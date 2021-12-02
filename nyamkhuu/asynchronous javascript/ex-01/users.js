
const myPromise = new Promise(function (resolve, reject) {

    let xhr = new XMLHttpRequest();
    
    
    xhr.open("GET", "https://gorest.co.in/public/v1/users");
    
    xhr.onload = () => {
        if (xhr.status == 200) {
            
            return resolve(xhr.responseText)
        } else {
            return reject('error')
        }
        console.log(xhr.responseText)
    }
    
    xhr.send()

});

myPromise.then((user)=> { 

    let json = JSON.parse(user).data

    
    
    console.log(json)
    
    json.map((users)=> { 

        document.getElementById('ajax').innerHTML += 
        
        `<h3>${users.name}</h3>`
        `<h3>${users.email}</h3>`
        
       
    }  )
})





