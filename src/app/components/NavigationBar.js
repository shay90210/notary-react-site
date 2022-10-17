import {  Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = () => {

    return (
        <Navbar>
            <NavbarBrand></NavbarBrand>
            <Nav 
                center
                navbar
            >
                <NavItem>
                    <NavLink href='/'>HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>ABOUT OUR COMPANY</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>RESOURCES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>CONTACT US</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar; 