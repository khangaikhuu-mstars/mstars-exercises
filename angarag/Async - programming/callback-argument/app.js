 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
    element.style.color = "white"
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
    element.style.color = "yellow"
}
function makeGreen(element){
    element.style.backgroundColor = "green"
    element.style.color = "pink"
}


function addStyleToElement(element, callback) {
    callback(element);
}
                                                                                                                                                                                                                                                                                    


addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeBlue);
addStyleToElement(div3, makeGreen);
