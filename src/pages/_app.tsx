import { AppProps } from "next/app";
import { Head } from "@/component/layout";
import "src/style/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head
        title="ユウトブログ"
        description="技術ブログや、近況報告などをやっていきます"
        url="https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0"
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
