const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url) {
<<<<<<< HEAD
  const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        return callback(data);
=======
  const promise = new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        return resolve(data);
      } else{
        return reject(data);
>>>>>>> 1b7e5161c9916f7d661c32971662cb5c0b855152
      }
    };
    xhr.send();
  });
<<<<<<< HEAD

=======
>>>>>>> 1b7e5161c9916f7d661c32971662cb5c0b855152
  return promise;
}






function getProfiles(json) {
<<<<<<< HEAD
  json.people.map(person => {
    getJSON(wikiUrl + person.name, generateHTML);
  });
=======
  const profiles = json.people.map( person => {
    return getJSON(wikiUrl + person.name);      
  }); 
  return profiles;
>>>>>>> 1b7e5161c9916f7d661c32971662cb5c0b855152
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
  const astronauts = getJSON(astrosUrl).then((data) => {
<<<<<<< HEAD
    console.log(data.people);
  });
=======
    const profiles = getProfiles(data);
    // for( i = 0; i < profiles.length; i ++ ) {
    //   profiles[i].then(data => generateHTML(data))
    // }
    profiles.map(profile => {
      profile.then(data => generateHTML(data))
    })
  });
  
>>>>>>> 1b7e5161c9916f7d661c32971662cb5c0b855152
});