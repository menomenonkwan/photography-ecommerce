import { useContext } from 'react';
import { Context } from '../Context';
import useHover from "../utils/useHover";
import { TiDeleteOutline, TiDelete } from "react-icons/ti";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0 2rem;
  position: relative;

  img { width: 100%; }

  svg {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    cursor: pointer;
    font-size: 3rem;
    color: var(--white);
  }
  
  p {
    bottom: 0.5rem;
    right: 0.5rem;
    position: absolute;
    background: var(--blue);
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    
    img { width: unset; }

    svg { 
      position: relative; 
      color: var(--black, black);
      bottom: unset;
      left: unset;
      font-size: 2rem;
      margin: 0 1rem;
    }

    p {
      position: relative;
      bottom: unset;
      right: unset;
      margin-top: 0.5rem;
      margin-left: auto;
      margin-right: 2rem;
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }
  }
`;

    const CartItem = ({ item }) => {
      const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  return (  
    <StyledDiv>
      <div ref={ref} >
      {hovered ? <TiDelete onClick={() => removeFromCart(item.id)} /> : <TiDeleteOutline /> }

      </div>

      
      <img src={item.url} alt="" />
      <p>${item.price}</p>
    </StyledDiv>
  );
}
 
export default CartItem;