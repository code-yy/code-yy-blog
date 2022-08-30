import { AppPropsWithLayout } from "@/type/next-type";
import "src/style/globals.css";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.getLayout ?? ((page) => page);

  return Layout(<Component {...pageProps} />);
};

export default App;
