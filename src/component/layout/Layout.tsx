import { FC, ReactNode, useEffect, useState } from "react";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { AppLoading } from "../ui";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Head } from "./Seo";

type Props = {
  children: ReactNode;
  meta?: {
    title: string;
    description: string;
    url: string;
  };
};

export const Layout: FC<Props> = ({ children, meta }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const [loading, setLoading] = useState<boolean>(true);
  const toggleColorScheme = (value?: ColorScheme): void => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) return <AppLoading />;

  return (
    <>
      <Head title={meta?.title} description={meta?.description} url={meta?.url} />
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
