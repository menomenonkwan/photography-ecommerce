import ContactInfo from '../ContactInfo';
import SocialMenu from '../SocialMenu';
import { StyledFooter } from './Layout.styles';

const Footer = () => {
  const today = new Date();

  return (  
    <StyledFooter>
      <SocialMenu />
      <ContactInfo />
      <p>&copy; {today.getFullYear()} Brannon Lee</p>
    </StyledFooter>
  );
}
 
export default Footer;