import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

interface requiredImage {
  format: string;
  height: number;
  width: number;
  src: string;
  toString: () => string;
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    (window as any).preloadedImages = [];
    const preload = (...imageInputs: requiredImage[]) => {
      imageInputs.forEach((image) => {
        const newImage = new Image();
        newImage.src = image.toString();
        (window as any).preloadedImages.push(newImage);
      });
    };

    preload(
      require('../public/images/tower.jpeg?webp'), // eslint-disable-line
      require('../public/images/night-sky.jpeg?webp'), // eslint-disable-line
      require('../public/images/tree.jpeg?webp'), // eslint-disable-line
    );

    setTimeout(() => {
      console.log('startStateLog');
      console.log((window as any).preloadedImages);
      console.log('endStateLog');
    }, 5000);
  }, []);

  return <Component {...pageProps} />;
};

export default App;
