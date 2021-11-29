function callBackFunction(){
    console.log("Hello World!");
}
function executeCallBackFunction(callBack){
    callBack();
}
executeCallBackFunction(callBackFunction)


// Set Timeout function

setTimeout(print(5), 2000)
function print(times){
    for( i=1; i<=times; i++){
        console.log("Hello World!");
    }
}


// Set Timeout with Anonymous function

setTimeout(() => {
        console.log("I'm an anonymous function!")
    }
)