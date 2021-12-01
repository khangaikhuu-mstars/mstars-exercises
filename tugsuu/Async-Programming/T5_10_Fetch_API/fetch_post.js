const token = 'd5cea01d19de9563ce22086f876e78a3d813632a242f0a1e94cb878235fdf2f6'
fetch('https://gorest.co.in/public/v1/users/3520/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        const datas = data.data
        datas.map(j =>{
            document.getElementById("ajax").innerHTML += `<ul><li>${j.title}</li> ID:${j.id} , ${j.body}</ul>`
        })
    })

const requestOptions = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
        title: "My Post from Fetch",
        body: "Fetch POST example POST"
    })
};
bodyPUT = {
    name: 'testTugs' ,
}

const requestOptionsForUser = {
    method: 'PUT' ,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(bodyPUT

)
}

fetch ('https://gorest.co.in/public/v1/users/3520' , requestOptionsForUser)
.then((response) => response)
.then((data) =>{
    console.log(data)
})


