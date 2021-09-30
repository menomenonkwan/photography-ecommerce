import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.5rem;
  
  svg {
    cursor: pointer;
    color: var(--pink, white);
    transition: all 0.3s ease;

    &:hover {
      color: var(--red, red);
    }
  }
`;

const SocialMenu = () => {
  return (  
    <StyledDiv>
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
    </StyledDiv>
  );
}

export default SocialMenu;