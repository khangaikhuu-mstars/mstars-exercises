

// function callBackFunction(){
//     console.log("Hello World!")
// }


// function executeCallBackFunction(callback){
//     callback()
// }


// executeCallBackFunction(callBackFunction)


function print(times){
    for(i=0;i<times;i++){
        console.log("Hello World!")
    }
}

setTimeout(() =>{
    console.log("I am an anonymous function")
}, 2000)