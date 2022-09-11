import { Head, Layout } from "@/component/layout";
import { Home } from "@/component/page/root/Home";
import { NextPageWithLayout } from "@/type/next-type";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="ユウトブログ"
        description="技術ブログや、近況報告などをやっていきます"
        url="https://code-yy-blog.vercel.app/god.png"
        twitterCard="summary_large_image"
      />
      <Home />
    </>
  );
};

HomePage.getLayout = Layout;

export default HomePage;
