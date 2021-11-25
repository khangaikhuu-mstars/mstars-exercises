function callBackFunction(){
    console.log('hello world')
}
function executeCallbackFunction(callback){
   callback();
};
executeCallbackFunction(callBackFunction);