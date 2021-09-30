import { useContext, useState } from 'react';
import CartItem from '../components/CartItem';
import { Context } from '../Context';
import { calculateTotal } from '../utils';
import styled from 'styled-components';

const StyledMain = styled.main`
  
  h1 {
    margin: 1.5rem auto;
    font-size: 2.5rem;
  }
`;

const StyledDiv = styled.div`
  max-width: 90%;
  width: 750px;
  margin: 0 auto;
  padding: 0.25rem 0;
  
  @media (min-width: 600px) {
    max-width: 80%;
  }

  @media (min-width: 900px) {
    background: rgba(0,0,0,0.05);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    border-radius: 1rem;

  }
`;

const CheckoutContainer = styled.div`
  margin: 0 auto 3rem;
  max-width: 90%;
  width: 750px;
  text-align: right;
  padding: 1rem;
  
  p {
    font-size: 2rem;
  }
  
  button {
    margin-top: 1rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    background: var(--blue);
    font-size: 1.2rem;
    font-family: inherit;
    border-radius: 0;
    border-color: var(--black);
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  @media (min-width: 900px) {
    margin-bottom: 5rem;
    padding: 1rem 2rem;
    max-width: 80%;
  }
`;

const Cart = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const [btnText, setBtnText] = useState('Place Order');
  const [emptyText, setEmptyText] = useState('Your cart is empty, buddy.');

  const handleClick = (e) => {
    e.preventDefault();
    setBtnText('Ordering...');
    setEmptyText('Thank you for your purchase');

    setTimeout(() => {
      setBtnText('PlaceOrder');
      emptyCart();
    }, 3000);
  }

  return (  
    <StyledMain>
      <h1>Checkout</h1>
      <StyledDiv>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
          ))}
      </StyledDiv>
      <CheckoutContainer>
        {
          cartItems.length > 0 
            ? <>
                <p>Total: {calculateTotal(cartItems)}</p>
                <button onClick={handleClick}>{btnText}</button>
              </>
            : <p style={{ textAlign: 'center', marginTop: '5rem'}}>{emptyText}</p>
        } 
      </CheckoutContainer>
    </StyledMain>
  );
}
 
export default Cart;