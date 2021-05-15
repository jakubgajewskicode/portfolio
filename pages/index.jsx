import Head from 'next/head';
import * as React from 'react';

import Body from '../components/Body';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakub Gajewski</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="web development, programming, front-end developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Body />
    </>
  );
}
