import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Emir Morgan - Frontend Developer</title>
      </Head>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
