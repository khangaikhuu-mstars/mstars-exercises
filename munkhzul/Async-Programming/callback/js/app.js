// function callBackFunction() {
//     console.log("Hello World");
// }

// function executeCallBackFunction(callback) {
//     callback();
// }

// // callBackFunction();
// executeCallBackFunction(callBackFunction);

setTimeout(() => {
    console.log("i'm a anonymous function");
}, 2000); 

function print(times) {
    for (i = 1; i <= times; i++) {
        console.log("Hello World");
    }
}
