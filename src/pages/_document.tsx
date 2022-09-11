import { Html, Main, NextScript } from "next/document";
import { NextPage } from "next";
import { Head } from "@/component/layout";

const Document: NextPage = () => {
  return (
    <Html>
      <Head
        title="ユウトブログ"
        description="技術ブログや、近況報告などをやっていきます"
        url="https://code-yy-blog.vercel.app/god.png"
        twitterCard="summary_large_image"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
