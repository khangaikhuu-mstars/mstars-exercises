const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

let hover = function (event) {
    console.log(event);
    console.log(event.target);
    event.target.className = "highlight";
}
let empty = function (event) {
    event.target.className = "";
}


nameInput.addEventListener('focus', hover);
nameInput.addEventListener('blur', empty);
messageTextArea.addEventListener('focus', hover);
messageTextArea.addEventListener('blur', empty);