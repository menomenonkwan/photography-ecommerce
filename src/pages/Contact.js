import styled from 'styled-components';
import img from '../assets/contact.jpg';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const StyledMain = styled.main`
  background: var(--black, black);
  background-image: url(${img});
  background-size: cover;
  background-repeat: none;

  @media (min-width: 900px) {
    background-position: center;
  }
`;

const StyledContainer = styled.div`
  background: rgba(0,0,0,0.5);

  .contact-info {
    flex: 1;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    color: var(--white, white);
    
    h3 {
      font-size: 2.75rem;
      margin: 2rem 0;
    }
    
    .contact-text {
      font-family: var(--secondary-font);
      font-size: 1.25rem;
      letter-spacing: 0.05em;
      font-weight: lighter;
      margin-bottom: 4rem;
    }

    hr {
      color: var(--blue);
    }
  }
  
  .form-container {
    flex: 1;
  }

  @media (min-width: 900px) {
    background: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    
    .contact-info { 
      width: 750px;
      max-width: 80%;
      .contact-text {
        margin-bottom: 0;
      }
      
      h3 {
        font-size: 4rem;
        margin-top: 0;
        margin-bottom: 2rem;
      }

      div {
        display: none;
      }
    }

    .form-container {
      width: 60%;
      max-width: 600px;
    }
  }
`;



const Contact = () => {
 
  return (  
    <StyledMain>
      <StyledContainer>
        <section className="contact-info">
          <h3>Contact Us!</h3>
          <p className="contact-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus accusamus qui fugiat, velit tempora possimus asperiores repellendus repudiandae, temporibus iste iusto nostrum doloribus doloremque ratione esse alias veritatis. Repellendus, facilis.
          </p>
          <ContactInfo />
        </section>
        <section className="form-container">
          <ContactForm />
        </section>
      </StyledContainer>
    </StyledMain>
  );
}
 
export default Contact;