import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Head from "next/head";
import { FC, ReactNode, useEffect, useState } from "react";
import { AppLoading } from "../ui/AppLoading";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
  metadata?: {
    title?: string;
    description?: string;
    url?: string;
  };
};

export const Layout: FC<Props> = ({ children, metadata }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) return <AppLoading />;

  return (
    <>
      <Head>
        <title>ユウトブログ</title>
        <link rel="icon" href="/god.png" />
        <meta name="description" content="技術ブログや、近況報告などをやっていきます" />

        {/* Normal */}
        <meta property="og:title" content={metadata?.title ?? "ユウトブログ"} key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta
          property="og:description"
          content={metadata?.description ?? "技術ブログや、近況報告などをやっていきます"}
          key="description"
        />
        <meta
          property="og:image"
          content={
            metadata?.url ??
            "https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0"
          }
          key="image"
        />
        <meta property="og:site_name" content="ユウトブログ" key="site_name" />

        {/* Twitter */}
        <meta property="twitter:title" content={metadata?.title ?? "ユウトブログ"} />
        <meta
          property="twitter:image"
          content={
            metadata?.url ??
            "https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0"
          }
        />
        <meta
          property="twitter:description"
          content={metadata?.description ?? "技術ブログや、近況報告などをやっていきます"}
        />
        <meta name="twitter:site" content="@codeyy_dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};
