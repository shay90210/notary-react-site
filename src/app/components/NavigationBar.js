import {  Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = () => {

    return (
        <Nav>
            <NavItem>
                <NavLink href=''>ABOUT OUR COMPANY</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href=''>RESOURCES</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href=''>CONTACT US</NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavigationBar; 