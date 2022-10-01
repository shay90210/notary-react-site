import { 
    Nav, 
    UncontrolledDropdown,
    DropdownMenu, 
    DropdownToggle,
    DropdownItem,
}
from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Nav className='main-nav pt-3 pb-3 justify-content-center'>
        <UncontrolledDropdown
            direction='down'
        >
            <DropdownToggle
                caret
            >
                ABOUT
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>
                    <NavLink className='nav-link' to='/'>Company</NavLink>
                </DropdownItem>
                    <DropdownItem divider />
                <DropdownItem>
                    <NavLink className='nav-link' to='/'>How It Works</NavLink>
                </DropdownItem>
                    <DropdownItem divider />
                <DropdownItem>
                    <NavLink className='nav-link' to='/'>Information</NavLink>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>    
   )
}

export default NavigationBar; 