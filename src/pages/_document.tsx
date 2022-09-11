import { Html, Head, Main, NextScript } from "next/document";
import { NextPage } from "next";

const Document: NextPage = () => {
  return (
    <Html lang="ja">
      <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
