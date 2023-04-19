import { GetStaticProps, NextPage } from "next/types";
import { Head, MainLayout } from "@/component/Layout";
import { Home } from "@/component/Page/Home";
import { Post, getAllPosts } from "@/lib/api";

type Props = {
  posts: Post[];
};

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head />

      <MainLayout>
        <Home posts={posts} />
      </MainLayout>
    </>
  );
};

type Response = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<Response> = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt", "published", "emoji"]);

  return {
    props: { posts },
  };
};

export default HomePage;
