const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      return callback(data)

    }
  };
  xhr.send();
}

// Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  // Check if request returns a 'standard' page from Wiki
  if (data.type === 'standard') {
    section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
  } else {
    section.innerHTML = `
      <img src="img/profile.jpg" alt="ocean clouds seen from space">
      <h2>${data.title}</h2>
      <p>Results unavailable for ${data.title}</p>
      ${data.extract_html}
    `;
  }
}

btn.addEventListener("click", (eve) =>
  getJSON(astrosUrl, (json) => {
    const people = json.people;
    for (i = 0; i < people.length; i++) {
      let astronaut = people[i];
      getJSON(wikiUrl + astronaut.name, generateHTML);
    }

    // btn.style.display = "none"
    eve.target.remove();
  })
)


// btn.addEventListener("click", function () {
//   getJSON(astrosUrl)
// })





// btn.addEventListener("click", function (json) {
//   getJSON(astrosUrl, function (json) {
//     for (i = 1; i < 10; i++) {
//       console.log(json.people[i]);
//     }
//   });
// })