import { useContext } from 'react';
import CartItem from '../components/CartItem';
import { Context } from '../Context';

const Cart = () => {
  const { cartItems } = useContext(Context);

  return (  
    <main>
      <h1>This is the Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </main>
  );
}
 
export default Cart;