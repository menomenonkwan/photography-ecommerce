import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  margin: 0 1rem;
  align-items: flex-start;

  input, textarea {
    width: 100%;
    font-family: var(--secondary-font);    
    font-size: 1.35rem;
    padding: 0.25rem;
    border-radius: 3px;
    border: none;
    resize: vertical;
    outline: none;
    border: 3px solid var(--white);
  }

  input:focus, textarea:focus {
    border-color: var(--pink);
  }

  label { 
    color: var(--blue);;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
  }

  input[type="submit"] {
    cursor: pointer;
    background: var(--blue);
    margin: 2rem 0;
    text-transform: uppercase;
    border: none;
    padding: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }

  input[type="submit"]:hover {
    background: var(--dark-blue);
    box-shadow: none;
  }

  @media (min-width: 900px) {
    input[type="submit"] {
      width: fit-content;
      padding: 1rem 2rem;
      margin-left: auto;
    }
  }
`;

const ContactForm = () => {
  return (  
    <StyledForm>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"/>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email"/>
      <label htmlFor="message">Message:</label>
      <textarea name="message" cols="30" rows="10" placeholder="How can I help you?"></textarea>
      <input type="submit" value="Send" />
    </StyledForm>
  );
}
 
export default ContactForm;