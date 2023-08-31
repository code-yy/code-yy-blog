import { Html, Head, Main, NextScript } from "next/document";
import { NextPage } from "next";
import { Analytics } from "@vercel/analytics/react";

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
};

export default Document;
