fetch('https://gorest.co.in/public/v1/users/3528/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        let datas = data.data 
        datas.map((d) => document.getElementById("fetch").innerHTML  += `<ul> <li> ${d.title}</li> <li> ${d.body}</li></ul>`)
        console.log(data);
    })

// const element = document.querySelector('#fetch')
// const requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type':'application/json'},
//     body: JSON.stringify({ title: 'Fetch POST Request Example'})
// };
// fetch('https://reqres.in/api/articles', requestOptions)
//     .then(response => response.json())
//     .then(data => element.innerHTML = data.id);

// const element = document.querySelector("#fetch");
// const requestOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization":
//       "Bearer a593604e5afed04acc20cf3e269b8067eea3669f63e11a5f3fec19302deeb6d4",
//   },
//   body: JSON.stringify({ 
//       title: "Fetch POST Request Example", 
//       body: "THis is json"}),
// };
// fetch("https://gorest.co.in/public/v1/users/3528/posts", requestOptions)
//   .then((response) => response.json())
//   .then((data) => (element.innerHTML = data.id));

// const element = document.querySelector("#fetch");
// const requestOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization":
//       "Bearer a593604e5afed04acc20cf3e269b8067eea3669f63e11a5f3fec19302deeb6d4",
//   },
//   body: JSON.stringify({ 
//       title: "Fetch POST Request Example", 
//       body: "THis is a body"}),
// };
// fetch("https://gorest.co.in/public/v1/users/3528/posts")
//   .then((response)=>response.json()).then((data)=>{
//       let cuteData = data.data
//       cuteData.map((j)=>{ element.innerHTML +=`<div> ID: ${j.id} POST:${j.body}</div> ` })
//   });
