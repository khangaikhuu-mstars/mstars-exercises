
import './App.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Delivery from './Delivery';
import Action from './Action';
const App = () => (
  <BrowserRouter>

    <div className="container">
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="Home">Home</Nav.Link>
        <Nav.Link href="Delivery">Delivery</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Action">Action</NavDropdown.Item>
          <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    
         <Switch>
         <Route exact path="/Delivery" component={Delivery} />
         <Route path="/Home" component={Home} />
         <Route path="/Action" component={Action}/>
         </Switch>


    </div>
  </BrowserRouter>

);

export default App;
