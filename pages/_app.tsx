import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/* eslint-disable-next-line */}
      <link rel="preload" href={require('../public/images/tower.jpeg?webp')} as="image" />
      {/* eslint-disable-next-line */}
      <link rel="preload" href={require('../public/images/night-sky.jpeg?webp')} as="image" />
      {/* eslint-disable-next-line */}
      <link rel="preload" href={require('../public/images/tree.jpeg?webp')} as="image" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
