import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
