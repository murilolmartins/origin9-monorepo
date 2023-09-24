import type { DocumentContext } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { siteDescription, siteTitle } from '@constants';

import { ServerStyleSheet } from 'styled-components';

let siteUrl = '';
if (typeof window !== 'undefined') {
  siteUrl = window.location.host;
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="title" content={siteTitle} />
          <meta name="description" content={siteDescription} />
          <meta name="keywords" content="origin9" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteTitle} key="ogsitename" />
          <meta property="og:url" content={siteUrl} key="ogurl" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content={siteTitle} />
          <meta property="twitter:url" content={siteUrl} />

          <link rel="icon" href="favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
