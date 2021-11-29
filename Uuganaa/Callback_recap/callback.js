function sum(a, b) {
    const sum = a + b;
    return sum;
}


// Callback function
// function callbackExecution(callback) {
//     return callback(4, 5);

// }

// console.log(callbackExecution(sum))



// Callback Event target

const btn = document.getElementById("button")
btn.addEventListener("click", (event) => {
    console.log("button clicked")
    console.log(event.target)
    event.target.value = sum(5, 6)

});