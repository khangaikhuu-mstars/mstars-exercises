import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
                <Route path={'/items/orders'} component={Orders} /> 
                <Route path={'/items/delivery'} component={Delivery} />
                
            </Container>
        </BrowserRouter>
    );
}

export default App;
