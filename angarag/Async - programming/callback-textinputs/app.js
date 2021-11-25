const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');



const highLight = function (event) {
    event.target.className = "highlight"
}
const blur = function (event) {
    event.target.className = ''
}

nameInput.addEventListener("focus", highLight)
nameInput.addEventListener('blur', blur)
messageTextArea.addEventListener("focus", highLight)
messageTextArea.addEventListener('blur', blur)