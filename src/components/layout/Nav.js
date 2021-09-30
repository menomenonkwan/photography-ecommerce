import { useContext } from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import exit from '../../assets/exit.svg';
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { StyledNav } from './Layout.styles';
import { useLocation } from 'react-router';

const Nav = () => {
  const { pathname } = useLocation();
  const { cartItems } = useContext(Context);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    document.querySelector('.nav').classList.toggle('open-nav');
  }

  return (  
    <StyledNav>
      <img 
        src={menu} 
        className="menu" 
        alt="open menu" 
        onClick={handleMenuToggle} 
      />

      <ul className="nav">
        <li className="exit">
          <Link to="/">
            <img 
              src={exit}
              alt="close menu"
              onClick={handleMenuToggle}
            />
          </Link>
        </li>
        <li onClick={handleMenuToggle}>
          <Link to="/" className={pathname === '/' ? 'active' : null}>Home</Link>
        </li>
        <li onClick={handleMenuToggle}>
          <Link to="/gallery" className={pathname === '/gallery' ? 'active' : null}>Gallery</Link>
        </li>
        <li onClick={handleMenuToggle}>
          <Link to="/about" className={pathname === '/about' ? 'active' : null}>About</Link>
        </li>
        <li onClick={handleMenuToggle}>
          <Link to="/contact" className={pathname === '/contact' ? 'active' : null}>Contact</Link>
        </li>
        <li onClick={handleMenuToggle} className="link-with-icon">
          <Link to="/cart" className={pathname === '/cart' ? 'active' : null}>Cart {cartItems.length > 0 ? <IoCartSharp /> : <IoCartOutline />}</Link>
        </li>
      </ul>
    </StyledNav>  
  );
}
 
export default Nav;