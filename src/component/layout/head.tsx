import { FC } from "react";
import NextHead from "next/head";

type Props = {
  title: string;
  description: string;
  url: string;
};

export const Head: FC<Props> = ({ title, description, url }) => {
  return (
    <>
      <NextHead>
        <title>code-yy-blog</title>
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} key="description" />
        <meta property="og:image" content={url} key="url" />
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:image" content={url} key="twitter:image" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      </NextHead>
    </>
  );
};
