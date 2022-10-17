import {  
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';

const NavigationBar = () => {

    return (
        <div>
            <Navbar>
                <NavbarBrand></NavbarBrand>
                <Nav>
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
        </div>
    );
}

export default NavigationBar; 