const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

var hover = function (event) {
    event.target.className = "highlight"
}

nameInput.addEventListener("focus", hover)


var hide = function (event) {
    event.target.className = ""
}

nameInput.addEventListener("blur", hide)


messageTextArea.addEventListener("focus", hover)
messageTextArea.addEventListener("blur", hide)