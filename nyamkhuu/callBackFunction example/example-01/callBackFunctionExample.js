// declaration function

// function callBackFunction() {
//     console.log("Hello World");
// }

// callBackFunction();

// function excallBackFunction(callback){
//     callback();
// } 


setTimeout(()=> {console.log("WTF")}, 2000);

// function print(times){
// for ( i = 1; i <= times ; i++){ console.log("Hello World")}
// }





let print2 = function(times){
    for ( i = 1; i <= times ; i++){ console.log("Hello World")}
}
setTimeout(print2(5),4000);