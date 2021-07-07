import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

          <meta name="theme-color" content="#00a81a" />
          <meta name="keywords" content="Almeida, almeidx, web, developer" />
          <meta name="title" content="Almeida" />
          <meta property="og:title" content="Almeida" />
          <meta name="description" content="Yeet" />
          <meta property="og:description" content="Yeet" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Yeet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
