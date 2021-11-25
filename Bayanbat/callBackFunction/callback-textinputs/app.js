const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');
const areas = document.getElementsByTagName("P")
nameInput.addEventListener("focus",function(event){
    event.target.className = "highlight"
})
messageTextArea.addEventListener("focus",function(event){
    event.target.className = "highlight"
})
nameInput.addEventListener("blur",function(event){
    event.target.className = ""
})
messageTextArea.addEventListener("blur",function(event){
    event.target.className = ""
    console.log(event.target)
})
// const blur = function(event){
//     event.target.className = ""}
// const highligth = function(event){
//     event.target.className = "highlight"}
// areas.addEventListener("focus",
// })
// areas.addEventListener("blur", blur)
