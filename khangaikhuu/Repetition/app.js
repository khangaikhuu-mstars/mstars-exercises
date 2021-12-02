const btn = document.getElementsByClassName("button")[0];
const ul = document.getElementsByTagName("ul");
console.log(ul[0]);
btn.addEventListener('click', () => {
    // 1. Шинээр объект үүсгэх XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2. Callback функц тодорхойлох
    xhr.onreadystatechange = () => {
        document.getElementById("pets").innerHTML = `<li>Test</li>`;
        const responseArray = JSON.parse(xhr.responseText);
        const pets = responseArray.data;
        for (i = 0; i < pets.length; i++) {
            console.log(pets[i].nud)
            document.getElementById("pets").innerHTML += `<li>${pets[i].nud}</li>`
            document.getElementById("pets").innerHTML += `<li>${pets[i].age}</li>`
        }
    }

    // 3. Хүсэлтээ онгойлгох
    xhr.open('GET', 'pets.json');


    // 4. Хүсэлтээ илгээх
    xhr.send();
})


