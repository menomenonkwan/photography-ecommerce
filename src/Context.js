import React, { useEffect, useState } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // const url = `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`;

  // useEffect(() => {
    
  //   console.log('loading');
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setPhotos(data))
  //   console.log('..done');
  //   }, [url]);


  useEffect(() => {
    const selections = ['1040','1062','686','1067','108','65','129','17','165','28','301','564','392','402','419','449','555','567', '678', '789', '123', '234', '345', '456', '543', '432', '321', '1011', '987', '765', '876', '654'];
    const photoLoc = 'https://picsum.photos/id/'
    const photoSize = '/300/200';

    const photosArr = selections.map(id => {
      return {
        id,
        url: `${photoLoc}${id}${photoSize}`,
        isFavorite: false,
      }
    })

    setPhotos(photosArr);
  }, []);

  const toggleFavorite = (id) => {
    const updatedPhotosArr = photos.map(photo => {
      if(photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo;
    });

    setPhotos(updatedPhotosArr);
  }

  const addToCart = (newItem) => {
    setCartItems([ ...cartItems, newItem ]);
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const emptyCart = () => {
    setCartItems([]);
  }

  return (  
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        emptyCart,
        cartItems
      }}
    >
      {children}
    </Context.Provider>
  );
}
 
export { ContextProvider, Context };

