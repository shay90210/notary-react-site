import {  
    Navbar, 
    Nav, 
    NavItem, 
    NavLink,
    UncontrolledDropdown,
    DropdownMenu, 
    DropdownToggle,
    DropdownItem,
    Collapse, 
    NavbarToggler
} from 'reactstrap';

import { useState } from 'react';

const NavigationBar = ({ direction, ...args }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar sticky='top' className='main-nav' expand='md'>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink to='/' className='nav-link'>HOME</NavLink>
                    </NavItem>
                        <UncontrolledDropdown>
                            <DropdownToggle caret className='nav-link'>ABOUT</DropdownToggle>
                                <DropdownMenu {...args}>
                                    <DropdownItem>Our Company</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>How It Works</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Information</DropdownItem>
                                </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown>
                            <DropdownToggle caret className='nav-link'>RESOURCES</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Blog</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Knowledge Center</DropdownItem>
                                </DropdownMenu>
                        </UncontrolledDropdown>
                    <NavItem>
                        <NavLink to='/' className='nav-link'>CONTACT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar; 