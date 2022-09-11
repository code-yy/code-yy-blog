import { Head } from "@/component/layout";
import { AppPropsWithLayout } from "@/type/next-type";
import "src/style/globals.css";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head
        title="ユウトブログ"
        description="技術ブログや、近況報告などをやっていきます"
        url="https://code-yy-blog.vercel.app/god.png"
        twitterCard="summary_large_image"
      />
      {Layout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
