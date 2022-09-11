import { Layout, SEO } from "@/component/layout";
import { Home } from "@/component/page/root/Home";
import { NextPageWithLayout } from "@/type/next-type";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <SEO
        title="ユウトブログ"
        description="技術ブログや、近況報告などをやっていきます"
        url="https://lh3.googleusercontent.com/wR7ElVGqrF2okr0ibllfrVAA5-uEKcrXjr4xDjX9lA4YC4f_8x8_jl6vLDSAfbOFMn5uDemDz2q-6-h-pwbHLV_0GaZjl04pZ7UhpYw=s0"
      />
      <Home />
    </>
  );
};

HomePage.getLayout = Layout;

export default HomePage;
