const promise = new Promise(function (resolve, reject) {
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gorest.co.in/public/v1/users");
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText);
        } else {
            return reject ("rejected");
        }
    }
    
    xhr.send();
 }
 );


 promise    
    .then((response) => {
      
        const responseData = JSON.parse(response)
        console.log(responseData.data)
        for (let i = 0; i < responseData.data.length; i++) {
            console.log(responseData.data[i].name)
            document.getElementById("ajax").innerHTML += `<li>`responseData.data[i].name`</li>`
        }
    })
    .catch((error) => {
        document.getElementById("ajax").innerHTML = error
    })