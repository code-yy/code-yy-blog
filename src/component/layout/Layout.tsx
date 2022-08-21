import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import NextHeadSeo from "next-head-seo";
import { ReactElement, useEffect, useState } from "react";
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
      <NextHeadSeo
        title="code-yy-blog"
        description="code-yy-blog"
        canonical="/god.png"
        robots={"noindex, nofollow"}
        og={{
          title: "code-yy-blog",
          url: "http://localhost:3000/blogs/page/1",
          image: "/god.png",
          type: "article",
          siteName: "code-yy-blog",
        }}
        twitter={{
          card: "summary_large_image",
        }}
        customLinkTags={[
          {
            rel: "icon",
            type: "image/png",
            href: "/god.png",
            sizes: "16x16",
          },
        ]}
      />
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
