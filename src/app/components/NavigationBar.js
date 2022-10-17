import {  
    Navbar, 
    Nav, 
    NavItem, 
    NavLink,
    DropdownMenu, 
    DropdownToggle,
    DropdownItem,
    Dropdown,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavigationBar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Navbar sticky='top' className='main-nav' expand='md'>
            <Nav navbar>
                <NavItem>
                    <NavLink to='/' className='nav-link'>HOME</NavLink>
                </NavItem>
                    <Dropdown
                        isOpen={dropdownOpen}
                        toggle={toggle}
                        direction={direction}
                    >
                        <DropdownToggle className='nav-link'>ABOUT</DropdownToggle>
                            <DropdownMenu {...args}>
                                <DropdownItem>Our Company</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>How It Works</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Information</DropdownItem>
                            </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                        isOpen={dropdownOpen}
                        toggle={toggle}
                        direction={direction}
                    >
                            <DropdownToggle className='nav-link'>RESOURCES</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Blog</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Knowledge Center</DropdownItem>
                                </DropdownMenu>
                    </Dropdown>
                <NavItem>
                    <NavLink to='/' className='nav-link'>CONTACT</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

NavigationBar.propTypes = {
    direction: PropTypes.string,
}

export default NavigationBar; 