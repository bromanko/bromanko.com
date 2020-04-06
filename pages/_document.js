import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="alternate"
            title="bromanko RSS"
            href="/api/feed.xml"
            type="application/rss+xml"
          />
        </Head>
        <body className="font-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
