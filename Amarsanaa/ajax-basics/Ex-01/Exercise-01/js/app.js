const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  console.log(xhr.status);
  if (xhr.status === 200) {
    console.log("The Request is ok");
    document.getElementById("ajax").innerHTML = xhr.responseText;
  }
};

xhr.open("GET", "sidebar.html");

xhr.send();
