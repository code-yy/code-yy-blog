import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { AppLoading } from "../ui";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
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
        <MantineProvider>
          <Header />
          <main className="my-5">{children}</main>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};
