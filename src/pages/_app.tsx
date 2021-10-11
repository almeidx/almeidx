import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Almeida - Web Developer</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
