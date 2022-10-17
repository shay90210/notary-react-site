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
            <Navbar
                sticky='top'
                className='main-nav'
            >
                <NavbarBrand></NavbarBrand>
                <Nav
                    className='second-nav'
                >
                    <NavItem>
                        <NavLink 
                            to='/'
                            className='nav-link'
                        >HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to='/'
                            className='nav-link'
                        >ABOUT OUR COMPANY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to='/'
                            className='nav-link'
                        >RESOURCES</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to='/'
                            className='nav-link'
                        >CONTACT US</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavigationBar; 