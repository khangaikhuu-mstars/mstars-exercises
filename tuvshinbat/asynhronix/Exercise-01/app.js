const peoplelist = document.getElementById("people")
const btn = document.querySelector("button")

function getJSON() {
    const myPromise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "sidebar.html")

        xhr.onload = function () {
            if (xhr.status === 200) {
                let data = xhr.responseText;
                console.log("The request is ok")
                document.getElementById("ajax").innerHTML = xhr.responseText;
                return resolve(data)
            } else {
             return   reject("rejeted")

            }
        }
        xhr.send()
        
        
        
    }) 
    console.log(myPromise)
    
    return myPromise
}


document.getElementById("button").addEventListener("click", (event)=>{
   getJSON().then((data) =>{
       console.log(data)
       data = document.getElementById("ajax").innerHTML
   }).catch ((error) =>{
       console.log(error)
       document.getElementById("ajax").innerHTML = error
   })
   
   .finally(()=>{
       btn.style.display = 'none'
   })
    console.log(getJSON())

})






