import Head from 'next/head';
import * as React from 'react';

//UI

import Body from '../components/Body';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakub Gajewski</title>
        <link rel="icon" href="/fav.png" />
        <meta name="portfolio" content="web development, programming, front-end developer" />
      </Head>

      <Body />
    </>
  );
}
