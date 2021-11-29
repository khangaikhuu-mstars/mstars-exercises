
url = "sidebar.html" 

function getSidebar(){

    let myPromise = new Promise(function(resolve, reject){
        let xhr  =  new XMLHttpRequest()
        
        xhr.open("GET", "sidebar.html")

        xhr.onload = function(){
            if (xhr.status === 200){
                let data  = xhr.responseText
                return resolve(data)
                // document.getElementById("ajax").innerHTML = xhr.responseText
            } else {
                return reject("Rejected")
            }
            
        }
        xhr.send()
    }) 
    console.log(myPromise)
    return myPromise
}


document.getElementById("button").addEventListener("click", (event)=>{
    
    getSidebar().then((data) =>{
        console.log(data)
        document.getElementById("ajax").innerHTML = data
    }).catch((error)=>{
        console.log(error)
        document.getElementById("ajax").innerHTML = "<h2> Page is not found</h2>"
    })
    .finally(event.target.remove())

    
})