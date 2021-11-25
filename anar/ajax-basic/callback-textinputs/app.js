const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const highlight = event => {
    console.log(event.target)
    event.target.className = 'highlight';
};

const hide = function(event) {
    console.log(event.target)
    event.target.className = '';
};

function addEvent(element){
    element.addEventListener('focus', highlight);
    element.addEventListener('blur', hide);    
}

addEvent(nameInput);
addEvent(messageTextArea);