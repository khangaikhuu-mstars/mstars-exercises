const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url,) {

  const promise = new Promise(function (resolve, reject) {


    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        return resolve(data)
      } else {
        return reject(data)
      }
    };
    xhr.send();
  })

  return promise;

}


function getProfiles(json) {

  const profile = json.people.map(person => { return getJSON(wikiUrl+person.name);})
  // json.people.map(person => {
  //   getJSON(wikiUrl + person.name);
  // });
  return profile;
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

btn.addEventListener('click', (event) => {


  const astronauts = getJSON(astrosUrl)
    .then((data) => {
      

      const profile = getProfiles(data);

      for (index = 0; index < profile.length; index++) {

        profile[index].then(data => {
          generateHTML(data)
        });

      }


      // for (i = 0; i < people.length; i++) {
      //   console.log(people)
      // }


    })

});


// event.target.remove();
// console.log(astronauts);