import "src/style/globals.css";
import { Roboto, Noto_Sans_JP } from "@next/font/google";
import { ColorSchemeProvider, Global, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  weight: "700",
  subsets: ["japanese"],
});

const App = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<any>("#FBFBFB");
  const toggleColorScheme = (value: any) => {
    const isDarkTheme = value || (colorScheme === "dark" ? "#FBFBFB" : "dark");
    setColorScheme(isDarkTheme);
  };

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme, fontFamily: "Roboto" }} withGlobalStyles>
          <Global
            styles={(theme) => ({
              body: {
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
              },
            })}
          />
          <style jsx global>{`
            html {
              font-family: ${roboto.style.fontFamily}, ${notoSansJp.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
