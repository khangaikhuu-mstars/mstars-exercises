function sum(a, b) {
    const sum = a + b;
    return sum;
};

function callbackExecution(callback) {
    return callback(4, 5);
};

console.log(callbackExecution(sum));

let btn = document.getElementById('button');
btn.addEventListener('click', (event) => {
    console.log('button clicked');
    event.target.value = sum(5, 6);
})