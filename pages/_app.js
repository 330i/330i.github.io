import TopBar from '../components/topbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <TopBar />
    </div>
  );
}