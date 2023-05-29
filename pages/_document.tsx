import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
              <title>BU ChatBot Demo</title>
              <link rel="icon" href="bu_logo.jpeg" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
