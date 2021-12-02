const btn = document.getElementsByClassName("button")[0];
btn.addEventListener('click', () => {
    // 1. Create a new object XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    // 2. Define a callback
    xhr.onreadystatechange = () => {
        document.getElementById("pets").innerHTML = `<li>Test</li>`;
        const responseArray = JSON.parse(xhr.responseText);
        const pets = responseArray.data;
        for( i = 0; i < pets.length; i++ ) {
            document.getElementById("pets").innerHTML += `<li>${pets[i].nud}</li>`
            document.getElementById("pets").innerHTML += `<li>${pets[i].age}</li>`
        }
    }
    
    
    // 3. Open request
    xhr.open('GET', 'pets.json');
    
    // 4. Send Request
    xhr.send();

})
