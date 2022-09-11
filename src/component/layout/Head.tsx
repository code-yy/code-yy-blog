import { FC } from "react";
import NextHead from "next/head";

type Props = {
  title: string;
  description: string;
  url: string;
  twitterCard: "summary_large_image" | "summary";
};

export const Head: FC<Props> = ({ title, description, url, twitterCard }) => {
  return (
    <NextHead>
      <title>code-yy-blog</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={url} />
      <meta name="twitter:card" content={twitterCard} />
    </NextHead>
  );
};
