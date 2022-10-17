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
                    <NavLink 
                        href='/'
                        className='nav-link'
                    >HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href='/'
                        className='nav-link'
                    >ABOUT OUR COMPANY</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href='/'
                        className='nav-link'
                    >RESOURCES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        href='/'
                        className='nav-link'
                    >CONTACT US</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar; 