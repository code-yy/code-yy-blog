import { FC } from "react";
import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
};

export const Head: FC<Props> = ({ title, description, url }) => {
  const _title = title ?? "ユウトブログ";
  const _description: string = description ?? "技術ブログや、近況報告などをやっていきます";
  const _url: string =
    `https://code-yy-blog.vercel.app/${url}` ??
    "https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0";

  return (
    <>
      <NextHead>
        <title>code-yy-blog</title>
        <meta property="og:title" content={_title} key="title" />
        <meta property="og:description" content={_description} key="description" />
        <meta property="og:image" content={_url} key="url" />
        <meta property="twitter:title" content={_title} key="twitter:title" />
        <meta property="twitter:image" content={_url} key="twitter:image" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      </NextHead>
    </>
  );
};
