import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { PORTAL_IDS } from 'src/constants'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id={PORTAL_IDS.MODAL} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
