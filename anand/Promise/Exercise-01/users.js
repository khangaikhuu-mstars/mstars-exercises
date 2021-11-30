const promise = new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest()
    xhr.open("GET", 'https://gorest.co.in/public/v1/users')
    xhr.onload  =function(){
        if (xhr.status == 200) {
            let haha = JSON.parse(xhr.responseText).data
            return resolve(haha)
        } else {
            return reject('Rejected')
        }
    }
    xhr.send()
})


promise.then((data)=>{
    console.log(data)
    data.map(()=>{
        document.getElementById('ajax').innerHTML = `${data.name}`
    })
})
