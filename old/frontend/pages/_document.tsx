import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="light">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Source+Sans+Pro:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="unboxed.svg"
            sizes="any"
            type="image/svg+xml"
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

export default MyDocument;
