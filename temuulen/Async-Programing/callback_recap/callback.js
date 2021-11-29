function sum(a, b) {
    const sum = a + b;
    return sum;
}

function callbackExecution(callback) {
    return callback(4, 5);
} 
    
callbackExecution(sum);
console.log(callbackExecution(sum));

const btn = document.getElementById("button");

btn.addEventListener('click', (event) => {
    console.log('button clicked');
    console.log(event.target);
    event.target.value = sum( 5, 6);
})