import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import NextHeadSeo from "next-head-seo";
import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { GetLayout } from "@/type/next-type";
import { AppLoading } from "../ui/AppLoading";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: GetLayout = (page: ReactElement) => {
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
        <title>code-yy-blog</title>
        <meta content={"code-yy"} name="description"></meta>
        <meta property="og:title" content={"code-yy-blog"} />
        <meta property="og:description" content={"code-yy-blog"} />
        <meta property="og:type" content={"website"} />
        <meta property="og:url" content={"https://code-yy-blog-git-feature-ogp-test-code-yy.vercel.app/"} />
        <meta
          property="og:image"
          content={"https://pbs.twimg.com/profile_images/1549454971833200640/s2Ut8p5O_400x400.jpg"}
        />
        <meta property="og:site_name" content={"code-yy-blog"} />
        <meta name="twitter:site" content="@codeyy_dev" />
        <meta name="twitter:card" content={"summary"} />
        <link rel="canonical" href={"https://code-yy-blog-git-feature-ogp-test-code-yy.vercel.app/"} />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Header />
          <main>{page}</main>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};
