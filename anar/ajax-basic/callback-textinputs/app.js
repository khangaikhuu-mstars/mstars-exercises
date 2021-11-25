const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const highlight = function(event) {
    event.target.className = 'highlight';
};

const hide = function(event) {
    event.target.className = '';
};


nameInput.addEventListener('focus', highlight);
nameInput.addEventListener('blur', hide);

messageTextArea.addEventListener('focus', highlight);
messageTextArea.addEventListener('blur', hide)
