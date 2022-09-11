import { NextPage } from "next";
import { Layout } from "@/component/layout";
import { Home } from "@/component/page/root/Home";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
