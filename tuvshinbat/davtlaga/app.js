const btn = document.getElementsByClassName('button')[0];

console.log(btn)



// 1. shineer obect uusgeh ystoi


// btn.addEventListener('click', ( )=>{
//     const xhr= new XMLHttpRequest()


//     })

btn.addEventListener("click", () => {

    const xhr = new XMLHttpRequest

    // 2. call back punktion
    xhr.onload = () => {
        console.log(xhr.status);
        console.log(xhr.responseText);

        const responseArray = JSON.parse(xhr.responseText)
        console.log(responseArray)
        const pets = responseArray.data
        console.log(pets);
        for (i = 0; i < pets.length; i++) {
            console.log(pets[i].nud)
            document.getElementById("ajax").innerHTML += `dorj `
            document.getElementById("ajax").innerHTML += ` ${pets[i].nud}`
        }
    }

    // 3. reqeust 
    xhr.open("GET", "pets.json")
    // 4. sent

    xhr.send()
})