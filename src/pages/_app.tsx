import { AppProps } from "next/app";
import { Head } from "@/component/layout";
import "src/style/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default App;
