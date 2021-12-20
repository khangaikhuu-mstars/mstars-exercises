import { React, PureComponent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home"
import Order from "./Order"
import Delivery from "./Delivery"

class MyNav extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar className="fw-bolder" bg="light" expand="lg">
            <Container>
              <Navbar.Brand>SDA</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-Navbar-nav" />
              <Navbar.Collapse id="basic-Navbar-nav">
                <Nav className="ms-auto">
                <Route exact path = "/"/>
                <Route path="/order" component={Order}/>
                <Route path="/delivery" component={Delivery}/>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/order">Order </NavLink>
                <NavLink to="/delivery">Delivery </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </BrowserRouter>
    );
  }
}

export default MyNav;
