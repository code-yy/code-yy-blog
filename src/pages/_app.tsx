import { AppProps } from "next/app";
import "src/style/globals.css";
import { Roboto, Noto_Sans_JP } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  weight: "700",
  subsets: ["japanese"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily}, ${notoSansJp.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
