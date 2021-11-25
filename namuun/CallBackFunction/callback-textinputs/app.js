const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


// Task01, 02
nameInput.addEventListener('focus', function(event){
    event.target.className = 'highlight'
})


// Task03, 04
nameInput.addEventListener('blur', function(event){
    event.target.className = ''
})


// Task05
messageTextArea.addEventListener('focus', function(event){
    event.target.className = 'highlight'
})

messageTextArea.addEventListener('blur', function(event){
    event.target.className = ''
})
