// Use window.addEventListener("scroll",) Event listener. 
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount



// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener


// Define Play button variable



// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request


// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code



// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request



/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 
const business = new XMLHttpRequest
business.onload = () => {
    const dataJSON = JSON.parse(business.responseText)
    const datas = dataJSON.data
    for (i = 0; i < datas.length; i++) {
        document.getElementById("blogPost").innerHTML += `<div class="col-lg-4 blogPostElements">
    <img " src="${datas[i].thumbnail}"  alt="...">
        <h2>${datas[i].title}</h2>
        <p>${datas[i].content.slice(0,100)}</p>
        <a class="learnMoreArrow">Learn More → </a>
        
        
    </div>
</div>
</div>`


    }
}
business.open("GET", "../data/company_intro.json")
business.send();
// iconbox
const iconbox = new XMLHttpRequest
iconbox.onload = () => {
    const dataJSON = JSON.parse(iconbox.responseText)
    const datas = dataJSON.data
    for (i = 0; i < datas.length; i++) {
        document.getElementById("iconbox").innerHTML += `<div class="col-lg-4 iconBoxElements">
    <img class="iconBoxIcon" " src="${datas[i].icon}"  alt="...">
        <h2>${datas[i].title}</h2>
        <p>${datas[i].content.slice(0,100)}</p>
    </div>
`


    }
}
iconbox.open("GET", "../data/business_challenge.json")
iconbox.send();