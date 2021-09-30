import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/logo.png';
import { StyledHeader } from './Layout.styles';

const Header = () => {
  return (  
    <StyledHeader>
      <img src={logo} alt="" className="logo" />
      <Link to="/"><h1 className="logo-text">BLee Photography</h1></Link>
      <Nav />
    </StyledHeader>
  );
}
 
export default Header;
