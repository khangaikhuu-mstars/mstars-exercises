// function callBackFunction(){
//     console.log("Hello World");
// }

// function executeCallBackFunction(callback){
//     callback();
// }

// executeCallBackFunction(callBackFunction);

//



function print (times){
    for (i=1; i<=times; i++){
        console.log("Hello World")
    }
}

// setTimeout(function(){
//     print(5)
// },2000)


setTimeout(()=>{
    print(5)
},2000)