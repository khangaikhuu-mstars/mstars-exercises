const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


// add eventlistener 
nameInput.addEventListener("focus", function(event){
    console.log(event.target);
    event.target.className = "highlight"
})

//
nameInput.addEventListener("blur", function(event){
    
    event.target.className = ""
})

messageTextArea.addEventListener("focus", function(event){
    event.target.className = "highlight"
})

messageTextArea.addEventListener("blur", function(event){
    event.target.className = ""
})