
token = "291291423cd0707653a12dee6e49a08098d84b1a80c35504c8813b33edb788b5"
const URL = "https://gorest.co.in/public/v1/users/3573"
user_id = 3573
// fetch("https://gorest.co.in/public/v1/users/3573")
//     .then((response) =>{
//         //console.log(response.json())
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data.data)
//     })

const requestOptions = {
    method : "POST",
    headers: {'Content-type' : 'application/json',
               'Accept': 'application/json',
                'Authorization': `Bearer ${token}`},
    body: JSON.stringify({name : 'Temka',
                          gender: "male",
                          email: 'haha@hotmail.com',
                          status: 'active'
                    })
} 




// fetch("https://gorest.co.in/public/v1/users", requestOptions)
//     .then(response =>{
//         console.log(response.json())
//     })



let post  = `{
        "title":"Title for user 3574",
        "body" : "bodfkjdklffdfa j Bodyy bodyy"
    }`

const requestOptionsForPost = {
        method : "POST",
        headers: {'Content-type' : 'application/json',
                   'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`},
        body: post
    } 


function createRequestOption(method,content){

    const requestOptions = {
        method : "POST",
        headers: {'Content-type' : 'application/json',
                   'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`},
        body: JSON.stringify(content)
    } 
    return requestOptions
}    

function createPost(userid, content){
    let url =  URL + "/${userid}/posts"
    request_header = requestOptions(content)


}

// create post for user
// fetch("https://gorest.co.in/public/v1/users/3573/posts",requestOptionsForPost)
//         .then(data => console.log(data.json()))

post_id = 1637

 // PUT request. Send put request to update user data       
 bodyPUT = {
     name: 'Temkaaaaaa'
 }

const requestOptionsForPUT = {
    method: 'PUT',
    headers : {'Content-type' : 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`},
    body: JSON.stringify(bodyPUT)
}


fetch("https://gorest.co.in/public/v1/users/3573", requestOptionsForPUT)
    .then(response => response.json())
    .then(data => console.log(data))










