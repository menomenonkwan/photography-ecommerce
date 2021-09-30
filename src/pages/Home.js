import img from '../assets/home.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
  background: var(--black, black);
  background-image: url(${img});
  background-size: cover;
  background-position: inherit;
  background-repeat: none;
  display: grid;
  place-content: start;
  padding: 25% 5%;
  text-shadow: 0 5px 10px rgba(0,0,0,0.2);
  color: var(--light-blue, white);

  h1 {
    text-align: left;
    font-size: 3.5rem;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.25rem;
    margin: 1rem 0 1.5rem;
    text-align: left;
  }
  
  a {
    margin: 0 auto;
  }
  
  button {
    font-family: inherit;
    width: fit-content;
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 3px;
    background: var(--pink);
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: none;
      background: #99524f;
    }
  }
  
  @media (min-width: 600px) {
    place-content: center;
    padding: 0 5%;
    font-size: 2.25rem;
    
    h1 {
      font-size: 3.5rem;
      line-height: 1.2;
    }
    
    h4 {
      font-size: 2rem;
      margin: 1rem 0 1.5rem;      
    }

    a {
      margin: 0;
      margin-right: auto;
    }
  }

  @media (min-width: 900px) {
    padding-bottom: 5rem;
    padding-right: 7.5rem;

    h1 {
      font-size: 5rem;
    }
  }
`;

const Home = () => {
  return (  
    <StyledMain>
      <h1>Capture The Moment</h1>
      <h4>Professional photography at its finest</h4>
      <Link to="/gallery"><button>View My Work</button></Link>
    </StyledMain>
  );
}
 
export default Home;