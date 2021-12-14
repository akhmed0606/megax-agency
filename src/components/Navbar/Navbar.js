import {useState, useEffect} from 'react'
import {
  Nav,
  NavContainer,
  Navlogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from "./Navbar.style";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';

const Navbar = () => {
    const [click,setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav>
        <NavContainer>
          <Navlogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            MegaX
          </Navlogo>
          <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/service' onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
        </NavContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
