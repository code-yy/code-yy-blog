import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { AppLoading } from "../ui";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  // NOTE: ColorSchemeの型の拡張方法がわからなかったので、一旦anyで妥協する😭
  const [colorScheme, setColorScheme] = useState<any>("#FBFBFB");

  const toggleColorScheme = (value: any) => {
    const isDarkTheme = value || (colorScheme === "dark" ? "#FBFBFB" : "dark");
    setColorScheme(isDarkTheme);
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
          <main className="my-5">{children}</main>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};
