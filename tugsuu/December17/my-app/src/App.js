import './App.css';
import "react-bootstrap"
import { NavDropdown, Nav, Navbar , Container} from 'react-bootstrap';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <Container>
      <Header/>
      <Content/>
    </Container>
  );
}

export default App;
