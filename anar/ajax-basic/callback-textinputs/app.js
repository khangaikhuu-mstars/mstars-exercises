const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const highlight = function(event) {
    event.target.className = 'highlight';
};

const hide = function(event) {
    event.target.className = '';
};

function addEvent(element){
    element.addEventListener('focus', highlight);
    element.addEventListener('blur', hide);    
}

addEvent(nameInput);
addEvent(messageTextArea);