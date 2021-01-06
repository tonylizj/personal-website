import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="preload" href="../public/images/tower.webp" as="image" />
      <link rel="preload" href="../public/images/night-sky.webp" as="image" />
      <link rel="preload" href="../public/images/tree.webp" as="image" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
