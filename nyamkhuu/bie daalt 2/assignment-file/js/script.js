


//daalgavar 1


let navbar = document.getElementById('navScroll')
let header = document.getElementById('main-header')




console.log(header.offsetHeight)

let scrollDetect = function(event){
    
    if( event.target.scrollingElement.scrollTop >  navbar.offsetHeight +  header.offsetHeight ){
        
        navbar.classList.add('fixed-top', 'container')
        
    }else{
        navbar.classList.remove('fixed-top')
    }
}

window.addEventListener('scroll', scrollDetect);


//daalgavar 2

const section2Card = new XMLHttpRequest()
section2Card.onload = () => {
    const dataJson = JSON.parse(section2Card.responseText);
    const data = dataJson.data;
    console.log(data)
    for ( i = 0; i < 3 ; i++) {
        document.querySelector('#section2Card .row').innerHTML +=

        `
            <div class="col col-12 col-lg-4">
                <div class="card h-100">
                    <img src="${data[i].thumbnail}" class="card-img-top" alt="  ">
                    <div class="card-body">
                        <h5 class="card-title"> ${data[i].title}</h5>
                        <p class="card-text">${data[i].content.slice(0, 100)}</p>
                    </div>
                    <div class="card-footer">
                        
                        <a href="" class="texta"> Learn More </a>

                    </div>
                </div>
            </div>`
      
        
    }
}

section2Card.open('GET', './assignment-file/data/company_intro.json')
section2Card.send()


//daalgavar 3

const section3Card = new XMLHttpRequest()
section3Card.onload = () => {
    const dataJson = JSON.parse(section3Card.responseText);
    const data = dataJson.data;
    console.log(data)
    for ( i = 0; i < 3 ; i++) {
        document.querySelector('#section3Card .row').innerHTML +=

         `<div class="col col-12 col-lg-4 cardborder">
        <div class="card h-100">
            <img src="${data[i].icon}" class="card-img" alt="  ">
            <div class="card-body card-body-2">
                <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text"> ${data[i].content}</p>
            </div>

        </div>
    </div>`
      
        
    }
}

section3Card.open('GET', './assignment-file/data/business_challenge.json')
section3Card.send()






// Define Play button variable



// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request


// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code





/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 