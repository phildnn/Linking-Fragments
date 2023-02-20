import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Linking Fragments</title>
      </Head>
      <div className="sidebar">
        <nav className="sidebar-sticky">
          <div className="sidebar-about">
            <h1>Linking Fragments</h1>
            <p>From Programming to Finance - this blog contains articles, ideas, concepts and projects that spark my interest.</p>
          </div>
          <Link href="/">Home</Link>
          <br />
          <Link href="/">LinkedIn</Link>
          <br />
          <Link href="/">Imprint</Link>

        </nav>
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
      
    </div>
  );
}

export default MyApp;
