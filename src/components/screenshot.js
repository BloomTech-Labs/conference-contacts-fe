import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const images = [
  'https://i.ibb.co/4sPC32f/image.png',
  'https://i.ibb.co/Dwj7BjP/image-1.png',
  'https://i.ibb.co/k9659RJ/image-6.png'
];

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
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
        transition: "opacity 0.5s ease",
        transform: "translateX(-50%)",
        display: 'flex',
        flexDirection:'row',
        marginLeft:'50%',
        

      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

export default App;
