 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function addStyleToElement(element, callback) {
    callback(element);
}
// TASK-1
addStyleToElement(div1 , makeRed)
// TASK-2
addStyleToElement(div2 , makeBlue)
// TASK-3
function makeGreen(element) {
    element.style.backgroundColor = "green";
}
// TASK-4
addStyleToElement(div3 , makeGreen)