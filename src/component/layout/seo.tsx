import { FC } from "react";
import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  type?: "blog" | "article";
};

export const SEO: FC<Props> = ({ title, description, url, type = "blog" }) => {
  return (
    <NextHead>
      <title>ユウトブログ</title>
      <link rel="icon" href="/god.png" />
      <meta name="description" content="技術ブログや、近況報告などをやっていきます" />

      {/* Normal */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={url} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
};
