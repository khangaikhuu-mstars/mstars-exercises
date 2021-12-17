import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item ><Link to={'/items/home'}>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item ><Link to={'/items/orders'}>Orders</Link></Breadcrumb.Item>
            <Breadcrumb.Item ><Link to={'/items/delivery'}>Delivery</Link></Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Header