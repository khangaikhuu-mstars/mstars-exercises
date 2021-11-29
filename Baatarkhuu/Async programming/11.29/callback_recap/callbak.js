function sum(a, b){
    const sum = a + b;
    return sum
}

function callbackExevution(callback){
    callback(4 , 5);
}

callbackExevution(sum);
console.log(callbackExevution);

const btn = document.getElementById("button")
btn.addEventListener("click", (event)=>{
    console.log("button clicked");
    console.log(event.target);
    event.target.value = sum(7,8);
})