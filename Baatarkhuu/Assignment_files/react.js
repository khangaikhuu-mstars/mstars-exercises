function Navbar(){
    return  (
        <div>
            <div id="mainLogo"></div>
            <ul>
                <li id="AboutUs"><a href="">About Us</a></li>,
                <li id="Careers"><a href="">Careers</a></li>,
                <li id="Services"><a href="">Services</a></li>,
                <li id="Blog"><a href="">Blog</a></li>,
                <li id="ConttactUs"><a href="">Contact Us</a></li>,
                <li id="CloneProject"><button> Clone Project</button></li>, 
            </ul>
        </div>
    )

}


    














ReactDOM.render(
     <Navbar/>   ,
    document.getElementById('page1')
)