import { useContext } from "react";
import { Context } from '../Context';
import styled from 'styled-components';
import Image from "../components/Image";

const StyledGrid = styled.div`
background: var(--black, black);
  padding: 1rem;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: dense;

  @media (min-width: 600px) {
    padding: 0;
    gap: 0;
  }
`;

const handleClick = (id) => {
  console.log('you clicked on photo ', id);
}

const Gallery = () => {
  const { photos } = useContext(Context);

  const photoGallery = photos.map(photo => 
      <Image 
        key={photo.id} 
        photo={photo}
        onClick={() => handleClick(photo.id)}
      />
    );

  return (  
    <main>
      <StyledGrid>
        {photoGallery}
      </StyledGrid>
    </main>
  );
}
 
export default Gallery;