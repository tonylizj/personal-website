import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';

// TODO: fix flash of plain html before css loads
const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
