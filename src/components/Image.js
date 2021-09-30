import { useState, useContext } from 'react';
import useHover from '../utils/useHover';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Context } from '../Context';
import styled from 'styled-components';
import { HiHeart, HiOutlineHeart, HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi";

const StyledImageDiv = styled.div`
  position: relative;
  overflow: hidden;

  .favorite, .cart {
    font-size: 2rem;
    position: absolute;
    top: 5px;
    cursor: pointer;
  }

  .favorite {
    color: var(--red);
    left: 10%;
  }

  .cart {
    color: var(--dark-blue);
    right: 10%;
  }

  @media (min-width: 600px) {
    img {
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
   
    .favorite {
      left: 5px;
    }

    .cart {
      right: 5px;
    }
  }
`;

const LoadingDiv = styled.div`
  color: var(--white);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;


const Image = ({ photo }) => {
  const [loaded, setLoaded] = useState(false);
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context);
  const { width } = useWindowDimensions();

  const heartIcon = () => {
    if(photo.isFavorite) {
      return <HiHeart className="favorite" onClick={() => toggleFavorite(photo.id)} />
    } else if (hovered) {
      return <HiOutlineHeart className="favorite" onClick={() => toggleFavorite(photo.id)} />
    }
  }

  const heartIconMobile = () => {
    if(photo.isFavorite) {
      return <HiHeart className="favorite" onClick={() => toggleFavorite(photo.id)} />
    } 
    return <HiOutlineHeart className="favorite" onClick={() => toggleFavorite(photo.id)} />
  }

  const cartIcon = () => {
    const isInCart = cartItems.some(item => item.id === photo.id);
    if(isInCart) {
      return <HiShoppingCart className="cart" onClick={() => removeFromCart(photo.id)}/> 
    } else if (hovered) {
      return <HiOutlineShoppingCart className="cart" onClick={() => addToCart(photo)}/>
    }
  }

  const cartIconMobile = () => {
    const isInCart = cartItems.some(item => item.id === photo.id);
    if(isInCart) {
      return <HiShoppingCart className="cart" onClick={() => removeFromCart(photo.id)}/> 
    } 
    return <HiOutlineShoppingCart className="cart" onClick={() => addToCart(photo)}/>
  }

  return (  
    <StyledImageDiv ref={ref}>
      {loaded ? null : (
        <LoadingDiv>Loading...</LoadingDiv>
      )}
      <img 
        style={loaded ? {} : { display: 'none' }}
        src={photo.url} 
        alt="" 
        onLoad={() => setLoaded(true)}
      />

      {width < 600 
        ? heartIconMobile()
        : heartIcon()
      }
      {width < 600 
        ? cartIconMobile()
        : cartIcon()
      }

    </StyledImageDiv>
  );
}
 
export default Image;