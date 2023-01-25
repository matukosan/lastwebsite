import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from '@nextui-org/react';
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js"
                  id="pirschjs"
                  data-code="DRCSiiTXNvLfXgfgGc98XbgeZVGs2xmd"></script>
          <Script id="crisp" dangerouslySetInnerHTML={{ __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="31493b56-f455-4e23-803b-9e8e659712a6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();` }}></Script>
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
