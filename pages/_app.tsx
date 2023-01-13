import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';

// eslint-disable-next-line react/function-component-definition
const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
