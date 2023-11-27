import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Emir Morgan - Full-Stack Developer</title>
      </Head>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
