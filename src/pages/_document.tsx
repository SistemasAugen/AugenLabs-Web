import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

import theme from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Augen Opticos" />
          <meta
            property="og:description"
            content="Es una empresa de tecnología dedicada a la investigación y producción de tecnología óptica. A través de la innovación y desarrollo de nuevas tecnologías creamos valor en todas las actividades de la empresa."
          />
          {/* <meta property="og:image" content="" /> */}
          <meta property="og:url" content="augenopticos.com" />

          <meta
            name="description"
            content="Es una empresa de tecnología dedicada a la investigación y producción de tecnología óptica. A través de la innovación y desarrollo de nuevas tecnologías creamos valor en todas las actividades de la empresa."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
