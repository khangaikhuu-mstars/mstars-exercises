const finsweet = "{Finsweet";
const aboutus = "About Us";
const services = "Services";
const blog = "Blog";
const contactUs = "Contact Us";
const cloneProject = "Clone Project";
const NavMenu = () => (
  <div className="header wrapper">
    <div className="logo">
      <a className="menuElements logo" href="../index.html">
        {finsweet}
      </a>
    </div>
    <div className="menu">
      <ul className="headerMenuElements">
        <li>
          <a className="menuElements" href="../pages/aboutUs.html">
            {aboutus}
          </a>
        </li>
        <li>
          <a className="menuElements" href="../pages/services.html">
            {services}
          </a>
        </li>
        <li>
          <a className="menuElements" href="../pages/blog.html">
            {blog}
          </a>
        </li>
        <li>
          <a className="menuElements" href="../pages/contactUs.html">
            {contactUs}
          </a>
        </li>
        <li>
          <button className="headerButton" href="">
            {cloneProject}
          </button>
        </li>
      </ul>
    </div>
  </div>
);
ReactDOM.render(<NavMenu />, document.getElementById("navigationMenu"));
