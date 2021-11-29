function sum (a, b){
    const sum = a + b ;
    return sum
}
function callBackExecution(callBack){
    return callBack(4, 5);
}
callBackExecution(sum);

console.log(callBackExecution(sum));

const btn = document.getElementById("button")

btn.addEventListener('click', (event)=> {
    btn.innerHTML = sum(5 ,6)
    console.log(event.target)
    event.target.value = sum (5,6)
} )