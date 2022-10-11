import { Html, Head, Main, NextScript } from "next/document";
import { NextPage } from "next";

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body className="bg-gray-light-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
