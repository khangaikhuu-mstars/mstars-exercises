// function callbackFunction() {
//     console.log('Hello World');
// }

// function executeCallBackFunction(callback) {
//     callback();
// } 
// executeCallBackFunction(callbackFunction)




function print(times) {
    for( i = 1; i < times; i++ ){
        console.log('Hello World')
    }
}
setTimeout(print, 2000);