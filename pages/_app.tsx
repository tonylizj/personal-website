import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

interface requiredImage {
  format: string;
  height: number;
  width: number;
  src: string;
  toString: () => string;
}

const App = ({ Component, pageProps }: AppProps) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const img: HTMLImageElement[] = [];
    const preload = (...imageInputs: requiredImage[]) => {
      imageInputs.forEach((image, index) => {
        img[index] = new Image();
        img[index].src = image.toString();
      });
      setImages(img);
    };

    preload(
      require('../public/images/tower.jpeg?webp'), // eslint-disable-line
      require('../public/images/night-sky.jpeg?webp'), // eslint-disable-line
      require('../public/images/tree.jpeg?webp'), // eslint-disable-line
    );

    setTimeout(() => { console.log(images); }, 1000);
  }, []);

  return <Component {...pageProps} />;
};

export default App;
