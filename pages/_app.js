import TopBar from '../components/topbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <TopBar />
      <span className="absolute right-4 bottom-2 text-sm font-light text-white/50">Content Revision: Jan. 2023</span>
    </div>
  );
}