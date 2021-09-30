import styled from "styled-components";

const StyledDiv = styled.div`
  color: var(--grey);
  font-size: 1rem;
  letter-spacing: 0.125em;
  line-height: 1.75;

  hr {
    margin: 1.5rem 1rem;
  }
`;

const ContactInfo = () => {
  return (  
    <StyledDiv>
      <hr />
      <p>example@email.com</p>
      <p>555-555-5555</p>
      <p>123 Fake St</p>
      <p>Springfield, USA</p>
      <hr />
    </StyledDiv>
  );
}
 
export default ContactInfo;