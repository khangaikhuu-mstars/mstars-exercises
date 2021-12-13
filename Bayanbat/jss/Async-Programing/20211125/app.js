// function callbackFunction(){
//     console.log('hello  world')
// };
// function executecallbackFunction(callback){
//     callback()
// };
// executecallbackFunction(callbackFunction);

setTimeout(() => 
    {console.log('i am anonymous function')} , 2000)


function print (times){
    for(i=1; i<times; i++){
        console.log("helloWorld")
    }
}