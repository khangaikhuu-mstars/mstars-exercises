 
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

//make red 
addStyleToElement(div1, makeRed);

//make blue
addStyleToElement(div2, makeBlue);
