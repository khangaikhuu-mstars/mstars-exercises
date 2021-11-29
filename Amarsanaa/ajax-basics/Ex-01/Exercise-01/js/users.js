let xhr = new XMLHttpRequest();
const promise = new Promise(function (resolve, reject) {
  xhr.open("GET", "https://gorest.co.in/public/v1/users");
  xhr.onload = () => {
    if (xhr.status === 200) {
      let responseData = xhr.responseText;
      return resolve(responseData);
    } else {
      return reject("Rejected");
    }
  };
  xhr.send();
});

promise.then((responseData) => {
  const jsonData = JSON.parse(responseData);
  console.log(jsonData.data);
  const people = jsonData.data;
  for (i = 0; i < people.length; i++) {
    document.getElementById(
      "ajax"
    ).innerHTML += `<h2><li style="color: #5d916b">${people[i].name}</li></h2><h3><li>${people[i].email}</li></h3><h3><li>${people[i].gender}</li></h3><h3><li>${people[i].status}</li></h3>`;
  }
});
