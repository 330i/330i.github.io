import Head from 'next/head';
import Document from 'next/document';

import TopBar from '../components/topbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <TopBar />
      <span className="absolute z-50 right-4 bottom-2 text-sm font-light text-white/50">Content Revision: Jan. 2026</span>
    </div>
  );
}