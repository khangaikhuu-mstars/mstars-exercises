// executeCallbackFunction(callBackFunction)

// function executeCallbackFunction(callback) {
//     callback();
// }



// function callBackFunction() {
//     console.log("Hello world");
// }


// callBackFunction();






function print(times) {
    for (i = 1; i <= times; i++) {
        console.log("Hello World")
    }
}
// setTimeout(print(5), 2000);

setTimeout(() => {
    console.log("i,m a anonymous function")

}, 2000)