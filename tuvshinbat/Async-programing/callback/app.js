function callbackFunction() {
    console.log("hi callbackFunction ")
}


function executeCallbackFunction(callback) {
    callback()
    console.log("hello world")
}
executeCallbackFunction(callbackFunction);


function print(times) {
    for (i = 1; i <= times; i++) {
        console.log('hello world')
    }
}
setTimeout(() => { print(5)}, 3000)