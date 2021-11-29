function sum (a,b){
    const sum = a + b
    return sum
}

function callbackExecution(callback){
    return callback(4,5)
}

console.log(callbackExecution(sum))

const btn = document.getElementById('btn')
btn.addEventListener("click", (event)=>{
    event.target.value = sum(5, 9);
})