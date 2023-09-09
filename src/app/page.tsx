import { Head, MainLayout } from "@/component/Layout";
import { Home } from "@/component/Page/Home";
import { getAllPosts } from "@/lib/api";

const getPosts = async () => {
  return getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt", "published", "emoji"]);
};

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <>
      <Head />

      <MainLayout>
        <Home posts={posts} />
      </MainLayout>
    </>
  );
};

export default HomePage;
