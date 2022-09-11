import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
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
