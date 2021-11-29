const btn2 = document.getElementById('buttonJson');

function requestJson(){
    const myPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'users.json');
        xhr.onload = () => {
            if(xhr.status === 200){
                return resolve(xhr.responseText);
            }
            else{
                reject("Request rejected");
            }
        }
        xhr.send();
    });

    console.log(myPromise);
    myPromise
        .then((response) => {
            console.log(response);
            ul.innerHTML += JSON.parse(response).data;
        })
        .catch((error) => {
            console.log(error)
            ul.innerHTML = error;
        })
        .finally(() => {
            btn2.style.display = 'none'
        });
}




function addJson() {
    console.log(requestJson());
}