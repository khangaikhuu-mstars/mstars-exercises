const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', function(event){
    event.target.className = 'highlight'
})

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

// Task06


