import { AppProps } from "next/dist/shared/lib/router/router";
import "@/constant/style/app.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
