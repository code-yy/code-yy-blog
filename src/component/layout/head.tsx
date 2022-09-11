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
    url ??
    "https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0";

  return (
    <>
      <NextHead>
        <title>code-yy-blog</title>
        <link rel="icon" sizes="512x512" href="/god.png" />

        {/* Main */}
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={_description} />
        <meta property="og:image" content={_url} />

        {/* Twitter */}
        <meta name="twitter:site" content="@codeyy_dev" />
        <meta
          name="twitter:image"
          content="https://images.microcms-assets.io/assets/33c71035995b49b1b549e288e06aeb7e/9dc1c29068fe40c6a8de14639de46f06/760b7a8b44c283e43459afa1ddc71086-png.png"
        />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      </NextHead>
    </>
  );
};
