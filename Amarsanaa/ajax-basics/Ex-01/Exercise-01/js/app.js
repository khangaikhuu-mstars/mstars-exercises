const promise = new Promise(function (resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "sidebar.html");
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      return resolve(data);
    } else {
      return reject("Rejected");
    }
  };
  xhr.send();
});

console.log(promise);

promise
  .then((data) => {
    document.getElementById("ajax").innerHTML = data;
  })
  .catch((error) => {
    document.getElementById("ajax").innerHTML = "<h2>File not found</h2>";
  });
