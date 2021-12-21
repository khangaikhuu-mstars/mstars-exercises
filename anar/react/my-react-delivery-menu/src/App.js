import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './Header'
import Home from './Home' 
import Orders from './Orders' 
import Delivery from './Delivery' 

function App() {
    return (
        <BrowserRouter>
            <Container>

                <Route path="/" component={Header} />

                <Route exact path={'/'} component={Home} />
                <Route path={'/orders'} component={Orders} /> 
                <Route path={'/delivery'} component={Delivery} />
                
            </Container>
        </BrowserRouter>
    );
}

export default App;
