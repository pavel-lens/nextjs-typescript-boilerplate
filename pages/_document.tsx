import * as React from 'react';
import Document, { NextDocumentContext, DefaultDocumentIProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// @ts-ignore
export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DefaultDocumentIProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
