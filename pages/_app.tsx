import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => ( // TODO: fix flash of plain html before css loads
  <>
    <Head>
      {/* <link rel="preload" href="images/tower.webp" as="image" />
      <link rel="preload" href="images/night-sky.webp" as="image" />
      <link rel="preload" href="images/tree.webp" as="image" /> */}
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
