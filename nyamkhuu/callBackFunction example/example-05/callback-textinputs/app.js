const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');





nameInput.addEventListener('focus', (event)=> { 
    event.target.className = 'highlight'
    console.log(event.target)
})

nameInput.addEventListener('blur', (event)=> { 
    event.target.className = ''
    console.log(event.target)
})

messageTextArea.addEventListener('focus', (event)=> { 
    event.target.className = 'highlight'
})

messageTextArea.addEventListener('blur', (event)=> { 
    event.target.className = ''
})

