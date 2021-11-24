// 1. Create new XMLHttpRequest
let xhr = new XMLHttpRequest();

// 2. Create a callback function
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 1) {
    document.getElementById(
      "ajax"
    ).innerHTML += `<li>server connection established</li>`;
  } else if (xhr.readyState === 2) {
    document.getElementById("ajax").innerHTML += `<li>request received</li>`;
  } else if (xhr.readyState === 3) {
    document.getElementById("ajax").innerHTML += `<li>processing request</li>`;
  } else if (xhr.readyState === 4) {
    document.getElementById(
      "ajax"
    ).innerHTML += `<li>request is finished and response is finished</li>`;
  }
};

// 3. Open a request
xhr.open("GET", "sidebar.html");

// 4. Send a request
xhr.send();
