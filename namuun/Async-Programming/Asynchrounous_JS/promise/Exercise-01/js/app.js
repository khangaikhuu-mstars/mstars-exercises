var hide = document.getElementById("button")

const promise = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log("The request is OK");
            return resolve(xhr.responseText)
        } else {
            console.log("Failed")
            return reject('Rejected')
        }
    }
    xhr.open('GET', 'sidebar.html')
    xhr.send()
})
console.log(promise)

hide.addEventListener('click', () => {
    promise .then((response) => {
                    document.getElementById("ajax").innerHTML = response
                })
            .catch((error) => {
                    let main = document.querySelector("main")
                    main.innerHTML = "Page is not found"
                })
            .finally(() => {
                    hide.style.display = 'none'
    })
})