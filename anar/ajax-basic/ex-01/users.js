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
            
            let file = JSON.parse(response);
            console.log(file);
            let fileLen = file.data.length;

            let body = document.getElementsByTagName("body")[0];
            let tbl = document.createElement("table");
            let tblBody = document.createElement("tbody");

            for (let i = 0; i < fileLen; i++) {
                let row = document.createElement("tr");

                let parsedName = file.data[i].name;
                let parsedEmail = file.data[i].email;   
                let parsedGender = file.data[i].gender;   
                let parsedStatus = file.data[i].status;   

                let tmp = [parsedName, parsedEmail, parsedGender, parsedStatus];
                
                for (let j = 0; j < 4; j++) {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(tmp[j]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                tblBody.appendChild(row);
            }

            tbl.appendChild(tblBody);
            body.appendChild(tbl);
            tbl.setAttribute("border", "2");
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
    requestJson();
}