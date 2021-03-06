import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Mitr:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        </Head>
        <body className="text-white transition-all bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
