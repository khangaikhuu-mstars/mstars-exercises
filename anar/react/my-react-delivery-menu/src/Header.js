import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item ><Link to={'/'}>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item ><Link to={'/orders'}>Orders</Link></Breadcrumb.Item>
            <Breadcrumb.Item ><Link to={'/delivery'}>Delivery</Link></Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Header