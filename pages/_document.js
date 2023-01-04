// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Emir Morgan | Frontend Developer" />
        <meta
          name="keywords"
          content="emir morgan, emir morgan frontend developer, emir, morgan, emirmorgan, emirmrg"
        />
        <meta name="author" content="Emir Morgan"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
