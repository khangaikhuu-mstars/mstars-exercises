 
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


// Task begins here

addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeBlue);

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

addStyleToElement(div3, makeGreen)