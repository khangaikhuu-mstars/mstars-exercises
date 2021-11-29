const myPromise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status == 200) {
      return resolve(xhr.responseText);
    } else {
      return reject("Not found");
    }
  };
  xhr.open("GET", "https://gorest.co.in/public/v1/users");
  xhr.send();
});
myPromise
  .then((data) => {
    const dataJSON = JSON.parse(data).data;
    console.log(dataJSON);
    for (i = 0; i < dataJSON.length; i++) {
      console.log(dataJSON[i]);
      document.getElementById(
        "promise"
      ).innerHTML += `<h2>${dataJSON[i].name}</H2> 
                           <p> ${dataJSON[i].email} </p>
                           <p>${dataJSON[i].gender}</p>
                           <p> ${dataJSON[i].status}</p>
                           <p>${dataJSON[i].id}</p>`;
    }
  })
  .catch((error) => {
      console.log(error)
    document.getElementById("promise").innerHTML = `${error}`;
  });
