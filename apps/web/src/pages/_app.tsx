import "@/style/globals.css";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/dist/shared/lib/router/router";
import { theme } from "@/constant/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    /**
     * @url https://mantine.dev/guides/dark-theme/#global-styles
     * withGlobalStylesを使用すると、theme.colors.dark[7]が背景色、theme.colors.dark[0]がfont colorになる
     */
    <MantineProvider theme={theme} withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
