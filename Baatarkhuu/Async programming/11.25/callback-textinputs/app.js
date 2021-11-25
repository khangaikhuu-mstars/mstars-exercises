const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

// ex-1
nameInput.addEventListener("focus",function(event){
    event.target.className = "highlight"
})
// ex-2
messageTextArea.addEventListener("focus",function(event){
    event.target.className = "highlight"
})
// ex-3
nameInput.addEventListener("blur",function(event){
    event.target.className = ""
})
// ex-4
messageTextArea.addEventListener("blur",function(event){
    event.target.className = ""
})