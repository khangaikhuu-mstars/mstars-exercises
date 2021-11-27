 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

function addStyleToElement(element, callback) {
    callback(element);
}

function assignColor(color) {
    element.style.backgroundColor = color;
}

addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeBlue);
addStyleToElement(div3, makeGreen);