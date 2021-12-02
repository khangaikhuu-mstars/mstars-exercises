console.log('Hello i am starting');
let value_checker = "";
const isItDoneYet = new Promise((resolve, reject) => {
    const api_url = "https://reqres.in/api/users?page=2";
    const req = new XMLHttpRequest();
    req.open('GET', api_url);
    req.onload = function () {
        if (req.status == 200) {
            resolve(req.response);
        } else {
            reject(Error(req.statusText));
        }
    };
    req.send();
});
const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            value_checker = ok;
            console.log('after promise its value_checker= ' + value_checker)
            console.log(ok)
        })
        .catch(err => {
            console.log('Aldaa=>');
            console.error(err)
        })
}
checkIfItsDone();
console.log('its value_checker= ' + value_checker)