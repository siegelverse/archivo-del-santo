import React from 'react';
import { FaBars } from 'react-icons/fa';
import navicon from '../../images/icon.PNG'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle, user }) => {
    console.log(user)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={navicon} alt='icon' width='35px'/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='watch'
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >Watch</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='signup'
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>
                            {user ? `${user.name}` : 'Sign In'}
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer> 
            </Nav>    
        </>
    )
}

export default Navbar
