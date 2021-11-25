function callbackFunction() {
    console.log("Hello bitches")
}

function executeCallbackFunction(callback) {
    callback()
}
executeCallbackFunction(callbackFunction)


let content = ""

function print(times) {
    for (i = 1; i <= times; i++) {
        console.log("HELLO WORLD")
    }
}
setTimeout(() => {
    console.log("HELLO WORLD")
}, 2000);
