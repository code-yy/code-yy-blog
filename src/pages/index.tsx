import { NextPage } from "next";
import { Head, Layout } from "@/component/layout";
import { Home } from "@/component/page/root/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
