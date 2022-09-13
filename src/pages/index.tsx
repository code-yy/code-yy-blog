import { NextPage } from "next";
import { Home } from "@/component/page/root/Home";
import { Layout } from "@/component/layout";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
