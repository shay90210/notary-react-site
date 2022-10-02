import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    const handleSelect = (eventKey) => alert(`selected $(eventKey)`);

    return (
        <Nav
            onSelect={handleSelect}
            activeKey= '1'
            className='main-nav'
        >
            <Nav.Item
                className='nav-item'
            >
                <Nav.Link
                    eventKey='1'
                    href='#/home'
                    className='nav-item'
                >
                    HOME
                </Nav.Link>
            </Nav.Item>
                <NavDropdown
                    title='ABOUT'
                    id='nav-dropdown'
                    className='nav-item'
                >
                    <NavDropdown.Item eventKey= '2.1'>About Our Company</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey= '2.2'>How Notary Works</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey= '2.3'>Information</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title='RESOURCES'
                    id='nav-dropdown'
                    className='nav-item'
                >
                    <NavDropdown.Item eventKey= '3.1'>Blog</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey= '3.2'>Knowledge Center</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item
                    className='nav-item'
                >
                    <Nav.Link
                        eventKey='4'
                        href='#/contact'
                    >
                        CONTACT US
                    </Nav.Link>
                </Nav.Item>
        </Nav>    
   )
}

export default NavigationBar; 