import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

import home from '../../images/home.png';
import profile from '../../images/profile.png';
import scanqr from '../../images/scanqr.png';

const images = [home, scanqr, profile];

const GalleryImg = React.memo(GalleryImage);

function Screenshot() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: 'white',
        height: '60vh',
        width: '100vw',
        transition: 'opacity 0.5s ease',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '50%',
      }}
      index={index}
      onRequestChange={(i) => {
        setIndex(i);
      }}
    >
      {images.map((image) => (
        <GalleryImg objectFit="cover" key={image} src={image} />
      ))}
    </Gallery>
  );
}

export default Screenshot;
